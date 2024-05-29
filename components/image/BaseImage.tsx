export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export default function BaseImage({ alt, title, ...rest }: ImageProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <img alt={alt || title} {...rest} />;
}
