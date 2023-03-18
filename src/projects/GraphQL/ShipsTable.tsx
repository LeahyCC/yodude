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
import { RiSortAsc, RiSortDesc } from 'react-icons/ri'
import * as style from './shipsTable.styles'
import './resizer.css'

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
            cell: (info) => info.getValue() ?? 'N/A',
          }),
          columnHelper.accessor('model', {
            header: 'Model',
            cell: (info) => info.getValue() ?? 'N/A',
          }),
          columnHelper.accessor('starshipClass', {
            header: 'Class',
            cell: (info) => info.getValue() ?? 'N/A',
          }),
          columnHelper.accessor('maxAtmospheringSpeed', {
            header: 'Speed',
            cell: (info) => info.getValue() ?? 'N/A',
          }),
          columnHelper.accessor('length', {
            header: 'Length',
            cell: (info) => info.getValue() ?? 'N/A',
          }),
        ],
      }),
    ],
    [],
  )

  const table = useReactTable({
    data: starships,
    columns,
    enableColumnResizing: true,
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
        <thead
          {...{
            style: {
              width: table.getCenterTotalSize(),
            },
          }}
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  css={style.tTh}
                  {...{
                    style: {
                      width: header.getSize(),
                    },
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
                    asc: <RiSortAsc />,
                    desc: <RiSortDesc />,
                  }[header.column.getIsSorted() as string] ?? null}
                  <div
                    {...{
                      onMouseDown: header.getResizeHandler(),
                      onTouchStart: header.getResizeHandler(),
                      className: `resizer ${
                        header.column.getIsResizing() ? 'isResizing' : ''
                      }`,
                      style: {
                        transform: header.column.getIsResizing()
                          ? `translateX(${
                              table.getState().columnSizingInfo.deltaOffset
                            }px)`
                          : '',
                      },
                    }}
                  />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody css={style.tBody}>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} css={style.tTr}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  css={style.tTd}
                  {...{
                    style: {
                      width: cell.column.getSize(),
                    },
                  }}
                >
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
