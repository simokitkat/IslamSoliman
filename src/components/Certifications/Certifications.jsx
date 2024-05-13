import { certificatesData } from "../../utils/CertificatesData";
import Certificate from "./Certificate";
import "./certifications.scss";

export default function Certifications() {
  return (
    <section className="certifications">
      <div className="container">
        <div className="text">
          <h2>Certificates</h2>
          <p>
            Although I believe that the ability to code is what truly matters,
            I&apos;m proud to showcase these certificates as a testament to my
            dedication and perseverance in continuously improving my skills.
          </p>
        </div>
        <div className="certifications-grid">
          {certificatesData.map((certificate) => {
            return <Certificate {...certificate} key={certificate.name} />;
          })}
        </div>
      </div>
    </section>
  );
}
