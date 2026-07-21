type Props = {
  height?: number;
  width?: number;
  tabs?: string;
  className?: string;
};

export function FacebookEmbed({ height = 700, width = 100, tabs = "timeline", className }: Props) {
  const src = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
    "https://www.facebook.com/prorevnice/",
  )}&tabs=${tabs}&width=500&height=${height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

  return (
    <div className={className} style={{ width: `${width}%` }}>
      <iframe
        title="Pro Řevnice na Facebooku"
        src={src}
        width="100%"
        height={height}
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        loading="lazy"
        allow="encrypted-media"
      />
    </div>
  );
}
