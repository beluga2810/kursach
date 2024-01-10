import { useSelector } from 'react-redux';
import style from './user-profile.module.css';
import { getProfileDate } from '../redux/profile-reducer-selector';
import { useEffect, useState } from 'react';
import { GetRequestAPI } from '../../api/api';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { transliterate } from 'transliteration';

String.prototype.translate = function() {
  return transliterate(this, { lang: 'ru' });
};

const ProfilePage = () => {
  let ProfileData = useSelector(getProfileDate);
  let [booked, setBooked] = useState([]);
  const [TourMassive, setTourMassive] = useState([]);

  useEffect(() => {
    GetRequestAPI.GetBooked().then((data) => {
      let Data = data;
      setBooked(Data.filter((el) => +el.user_id === +ProfileData.id));
      console.log(data);
    });
  }, []);

  useEffect(() => {
    GetRequestAPI.GetAllTours('', '').then((data) => {
      let Data = data;
      setTourMassive(Data.filter((data) => booked.some((booked) => booked.tour_id === data.id)));
    });
  }, [booked]);

  const generatePDF = () => {
    const pdf = new jsPDF();

 
    pdf.setFontSize(16);
    pdf.text(`Name: ${ProfileData.name.translate()}`, 15, 15);
    pdf.text(`Email: ${ProfileData.email.translate()}`, 15, 25);

    pdf.text('Thank you for your interest in our package!', 15, 45);
    pdf.text('We are pleased to inform you that your tour has been successfully booked.',15, 55);
    TourMassive.forEach((el, index) => {
      const yPos = 85 + index * 60;
      pdf.setFontSize(12);
      pdf.text(`Tour Name: ${el.name.translate()}`, 15, yPos);
      pdf.text(`From: ${el.from_location.translate()}-${el.to_location.translate()}`, 15, yPos + 10);
      pdf.text(`Departure: ${el.from_address.translate()}, ${el.from_date}, ${el.from_time}`, 15, yPos + 20);
      pdf.text('Status: Booked', 15, yPos + 30);

      pdf.setLineWidth(0.5);
      pdf.line(15, yPos + 40, 195, yPos + 40);
    });

    pdf.save('profile_report.pdf');
  };

  const toursCard = TourMassive.map((el) => (
    <div className={style.card}>
      <h1 className={style.card_name}>{el.name}</h1>
      <p className={style.card_router}>Направление: {el.from_location}-{el.to_location}</p>
      <p className={style.data}>Место и дата отправления: {el.from_address}, {el.from_date}, {el.from_time}</p>
      <p className={style.description}>Забронировано</p>
    </div>
  ));

  const renderUserInfo = () => {
    return (
      <div className={style.user_info}>
        <p className={`${style.info_label} info_label`}>Имя:</p>
        <p className={`${style.info_value} info_value`}>{ProfileData.name}</p>
        <p className={`${style.info_label} info_label`}>Email:</p>
        <p className={`${style.info_value} info_value`}>{ProfileData.email}</p>
        <div className={style.button} 
                     onClick={generatePDF}>
                Generate a report on booked tours in PDF format</div>
      </div>
    );
  };

  return ProfileData.name && (
    <section className={style.section}>
      <div className={style.wrapper}>
        <div className={style.title}>
          <h1>Привет, {ProfileData.name}</h1>
          <p>Это ваш личный аккаунт, который видете только вы</p>
        </div>
        {renderUserInfo()}
        <div className={style.card_wrapper}>
          {toursCard}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;