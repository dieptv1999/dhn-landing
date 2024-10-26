export default function ListNotfound({type = 'bài viết'}: {type?: string}) {
    return (
        <>
            <div className={'py-16 text-gray-600 md:text-xl w-full text-center'}>
                Không có {type} nào phù hợp
            </div>
        </>
    )
}