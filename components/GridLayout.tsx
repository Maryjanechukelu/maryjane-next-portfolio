import { gridItems } from "@/Data/data";
import { Grid as GridLayout, GridItem } from "./ui/grid";

const Grid = () => {
  return (
    <section id="about">
      <GridLayout className="w-full py-20">
        {gridItems.map((item, i) => (
          <GridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </GridLayout>
    </section>
  );
};

export default Grid;
