import {
    Avatar as AvatarPrimitive,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar';

interface Props {
    src?: string,
    alt: string,
    fallback: string
}

const Avatar: React.FC<Props> = ({ src, alt, fallback }) => {

    return (
        <AvatarPrimitive>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </AvatarPrimitive>
    );
}

export default Avatar;
