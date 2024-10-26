'use client'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export interface CustomPaginationProps {
    total: number;
    page: number;
    pageSize: number;
    onChange: (page: number) => void
}

export default function CustomPagination({total, pageSize = 1, page = 0, onChange}: CustomPaginationProps) {

    const totalPage = total / pageSize

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={() => onChange(page - 1)} className={
                        page === 0 ? 'pointer-events-none opacity-50' : 'cursor-pointer'
                    }/>
                </PaginationItem>
                {page - 2 >= 0 ? <PaginationItem>
                        <PaginationLink>
                            <PaginationEllipsis/>
                        </PaginationLink>
                    </PaginationItem>
                    : null}
                {page - 1 >= 0 ? <PaginationItem>
                        <PaginationLink className={'cursor-pointer'}
                                        onClick={() => onChange(page - 1)}>{page}</PaginationLink>
                    </PaginationItem>
                    : null}
                <PaginationItem>
                    <PaginationLink isActive>
                        {page + 1}
                    </PaginationLink>
                </PaginationItem>
                {page + 1 < totalPage ? <PaginationItem>
                        <PaginationLink className={'cursor-pointer'}
                                        onClick={() => onChange(page + 1)}>{page + 2}</PaginationLink>
                    </PaginationItem>
                    : null}
                {page + 2 < totalPage ? <PaginationItem>
                        <PaginationEllipsis/>
                    </PaginationItem>
                    : null}
                <PaginationItem>
                    <PaginationNext onClick={() => onChange(page + 1)} className={
                        page + 1 >= totalPage ? 'pointer-events-none opacity-50' : 'cursor-pointer'
                    }/>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}