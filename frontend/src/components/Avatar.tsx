import {
    Avatar as AvatarPrimitive,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar';

interface Props {
    src?: string,
    className?: string,
    alt: string,
    fallback: string
}

const Avatar: React.FC<Props> = ({ src, alt, fallback, className }) => {

    return (
        <AvatarPrimitive className={className}>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </AvatarPrimitive>
    );
}

export default Avatar;
