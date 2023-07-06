type Props = {
    ref?: React.RefObject<HTMLDivElement>
    children: React.ReactNode
    className?: string
    id?: string
}

const Section = ({ children, className, ref, id }: Props) => {
    return (
        <section ref={ref} id={id} className={`container mx-auto px-4 py-20 sm:px-6 md:px-10 lg:px-20 ${className}`}>
            {children}
        </section>
    )
}

export default Section