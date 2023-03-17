import { useEffect, useState, useMemo } from 'react'
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  flexRender,
} from '@tanstack/react-table'
import { useStarShips, removeStarShipNuLLEntities } from './useStarShips'
import { StarshipItemFragment } from './gql/graphql'
import * as style from './shipsTable.styles'

export const ShipsTable = () => {
  const { data } = useStarShips()
  const cleanedData = removeStarShipNuLLEntities(data)
  /**
   * This is a helper function to create a column definition
   * that are typed with StarshipItemFragment.
   */
  const columnHelper = createColumnHelper<StarshipItemFragment>()

  const [starships, setStarships] = useState(cleanedData)
  const [sorting, setSorting] = useState<SortingState>([])

  useEffect(() => {
    setStarships(cleanedData)
  }, [data])

  const columns = useMemo(
    () => [
      columnHelper.group({
        header: 'Starships',
        columns: [
          columnHelper.accessor('name', {
            header: 'Name',
            cell: (info) => info.getValue(),
          }),
          columnHelper.accessor('model', {
            header: 'Model',
            cell: (info) => info.getValue(),
          }),
          columnHelper.accessor('starshipClass', {
            header: 'Class',
            cell: (info) => info.getValue(),
          }),
          columnHelper.accessor('maxAtmospheringSpeed', {
            header: 'Max Speed',
            cell: (info) => info.getValue(),
          }),
          columnHelper.accessor('length', {
            header: 'Length',
            cell: (info) => info.getValue(),
          }),
          columnHelper.accessor('costInCredits', {
            header: 'Cost',
            cell: (info) => info.getValue(),
          }),
        ],
      }),
    ],
    [],
  )

  const table = useReactTable({
    data: starships,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  })

  return (
    <div css={style.container}>
      <table css={style.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  css={style.tTh}
                  {...{
                    className: header.column.getCanSort()
                      ? 'cursor-pointer select-none'
                      : '',
                    onClick: header.column.getToggleSortingHandler(),
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                  {{
                    asc: ' 🔼',
                    desc: ' 🔽',
                  }[header.column.getIsSorted() as string] ?? null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody css={style.tBody}>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} css={style.tTr}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} css={style.tTd}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
