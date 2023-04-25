import Banner from "@component/components/banner";
import Content from "@component/components/content/content";
import Footer from "@component/components/footer";
import Navigation from "@component/components/navigation";
import imageHeader from "/public/assets/img/about.jpg";
import styles from "../components/content/content.module.css";

export default function About() {
  return (
    <main>
      <Navigation />
      <Banner />
      <Content imageHeader={imageHeader} title="About Me">
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
          dolor eget purus pretium hendrerit. Proin lobortis interdum leo, ut
          tincidunt dolor fringilla quis. Sed dignissim, velit vel rhoncus
          tincidunt, mauris mauris pharetra mi, id volutpat quam arcu ut lorem.
          Sed in dolor id orci euismod malesuada. Sed gravida quam a arcu
          vulputate, quis eleifend justo facilisis.<br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
          dolor eget purus pretium hendrerit. Proin lobortis interdum leo, ut
          tincidunt dolor fringilla quis. Sed dignissim, velit vel rhoncus
          tincidunt, mauris mauris pharetra mi, id volutpat quam arcu ut lorem.
          Sed in dolor id orci euismod malesuada. Sed gravida quam a arcu
          vulputate, quis eleifend justo facilisis.<br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
          dolor eget purus pretium hendrerit. Proin lobortis interdum leo, ut
          tincidunt dolor fringilla quis. Sed dignissim, velit vel rhoncus
          tincidunt, mauris mauris pharetra mi, id volutpat quam arcu ut lorem.
          Sed in dolor id orci euismod malesuada. Sed gravida quam a arcu
          vulputate, quis eleifend justo facilisis.
        </p>
      </Content>
      <Footer />
    </main>
  );
}
