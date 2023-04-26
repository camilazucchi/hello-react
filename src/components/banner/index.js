import Image from "next/image";
import styles from "./banner.module.css";
import cato from "../../../public/assets/img/cato.jpg";

export default function Banner() {
  const { banner, container, title, paragraph, picture } = styles;

  return (
    <div className={banner}>
      <div className={container}>
        <h1 className={title}>Hello, world!</h1>
        <p className={paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum
          felis justo, vel bibendum mi rhoncus nec. Fusce quis sapien vitae
          metus rutrum vehicula vel ac ex. Integer vitae tellus in tellus
          dapibus ullamcorper.
        </p>
      </div>

      <Image
        src={cato}
        alt="Orange cat licking his nose"
        className={picture}
        width={500}
        height={500}
      />
    </div>
  );
}
