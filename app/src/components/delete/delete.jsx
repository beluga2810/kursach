// import { useState } from 'react';
// import style from './delete.module.css';
// import { PostRequestAPI } from '../../api/api';

// const Delete = () => {
//   const [id, setEventId] = useState('');

//   const handleDelete = () => {
//     PostRequestAPI.DeleteEvent(id);
//     alert('Вы удалили экскурсию');
//   };

//   return (
//     <section className={style.section}>
//       <div className={style.wrapper}>
//         <div className={style.title}>
//           <h1>Удалить экскурсию</h1>
//         </div>
//         <div className={style.input_field}>
//           <p>Идентификатор экскурсии</p>
//           <input
//             type="text"
//             value={id}
//             onChange={(e) => setEventId(e.target.value)}
//           />
//         </div>
//         <div className={style.button} onClick={handleDelete}>
//           Удалить
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Delete;

// const DeleteEvent = (eventId) => {
//   return instance.delete(`/api/tour/delete/${eventId}`).then((response) => {
//     return response.data;
//   });
// };

// export const DeleteRequestAPI = {
//   DeleteEvent,
// };