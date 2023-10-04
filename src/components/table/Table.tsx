import React from 'react';

export interface IColumn<T> {
    header: string;
    field: keyof T;
    type: 'text' | 'link' | 'button';
    linkTo?: string; // Only needed if type is 'link'
    buttonLabel?: string; // Only needed if type is 'button'
    onClick?: (rowData: T) => void; // Only needed if type is 'button'
}

interface IProps<T> {
    data: T[];
    columns: IColumn<T>[];
    children?: React.ReactNode;
}

const Table = <T extends object = {}>({ data, columns }: IProps<T>) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-primary-100">
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="bg-white border-b">
                            {columns.map((column, colIndex) => (
                                <td key={colIndex} className="px-6 py-4">
                                    {column.type === 'link' ? (
                                        <a
                                            href={row[column.field] as string}
                                            className="font-medium text-blue-600 hover:underline"
                                        >
                                            {row[column.field] as React.ReactNode}
                                        </a>
                                    ) : column.type === 'button' ? (
                                        <button onClick={() => column.onClick?.(row)}>{column.buttonLabel}</button>
                                    ) : (
                                        (row[column.field] as React.ReactNode)
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
