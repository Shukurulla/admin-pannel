import React from "react";
import { Document, Text, Image, Page } from "@react-pdf/renderer";
import sertificatDetails from "../../public/sertificat-bg-datails.png";
import LogoItPark from "../../public/Logo_it_park.png";
import nexTechLogo from "../../public/next-tech-logo.png";
import sertificatText from "../../public/sertificat.png";
import pechat from "../../public/pechat.png";
import bg from "../../public/sertificat-bg.png";

const PdfFile = () => {
  return (
    <Document>
      <Page>
        <div className="sertificat-page">
          <div className="tobe">
            <img src={sertificatDetails} alt="" />
          </div>
          <div className="sertificat-header">
            <div className="itpark-logo">
              <img src={LogoItPark} alt="" />
            </div>
            <div className="next-tech-logo">
              <img src={nexTechLogo} alt="" />
            </div>
          </div>
          <div className="sertificat-info">
            <div className="sertificat-text-img">
              <img src={sertificatText} alt="" />
            </div>
            <div className="sertificat-info">
              <div className="student-name">
                <h1>ALlayarov ATABEK</h1>
              </div>
              <div className="success-course-info">
                <p>
                  <b className="course-name">
                    "IT operator-hamshiralar va boshqa sog'liqni saqlash tizimi
                    xodimlari uchun"
                  </b>
                  jami <b className="duration">24</b>
                  soatlik malaka oshirish kursini muaffaqiyatli yakunladi{" "}
                  <b>
                    <span className="start">11.09.2023</span>-
                    <span className="end-date">11.10.2023</span>
                  </b>
                </p>
              </div>
            </div>
            <div className="sertificat-footer">
              <div className="pechat">
                <img src={pechat} alt="" />
              </div>
              <div className="sertificat-code">
                <h5>NTI:KT0007</h5>
              </div>
              <div className="sertificat-date">
                <h5>sEPTEMBER, 2023</h5>
              </div>
            </div>
            <div className="footer-tobe">
              <img src={sertificatDetails} alt="" />
            </div>
          </div>
        </div>
      </Page>
    </Document>
  );
};

export default PdfFile;
