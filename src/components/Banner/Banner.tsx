interface BannerItem {
    containerClass: string, 
    imgClass: string, 
    src: string, 
    alt: string,
}

/** 
 * Отрисовка баннера
 */
export default function Image(props: BannerItem) {
    const { containerClass, imgClass, src, alt } = props;

    return (
        <div className={containerClass}>
            <img className={imgClass} src={src} alt={alt} />
        </div>
    );
}