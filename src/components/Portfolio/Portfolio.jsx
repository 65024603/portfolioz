import React from 'react'
import styles from './Portfolio.module.css'

const user ={
  img1:'https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.15752-9/423686511_776650307696288_1683895694076019845_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGbE0jQFZ-OpRRozLgJlz6kx_DfQCCCovDH8N9AIIKi8F-uK58LEhGz5QA_XPntwKERHADrMhmaFVnCMQEEp70u&_nc_ohc=Qdrd8kowNIMAX_cLqWq&_nc_ht=scontent.fcnx4-1.fna&oh=03_AdSCb7SYEXwbRvhWyGVcaPgYGCkNNz-hRSXsbFy5dLEiHg&oe=66102047',
  img2:'https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.15752-9/420770104_1766561454172030_8391544107971775219_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGBhFHdlPJTrFq03OEJSj-1cm0FlVCdQBRybQWVUJ1AFHx7kMFxu7w7del6j0atgJgQbaZZ-V4JSPZ6Bb7h5cuV&_nc_ohc=-RzkGB06wEkAX_pV719&_nc_ht=scontent.fcnx4-1.fna&oh=03_AdR-_WOIdQOxqWN3JSXdX4mikwFG7libVUEAWxmCxCPdDQ&oe=66101801',
  img3:'https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.15752-9/423455254_949505829906186_3374725163299993799_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFRHGSqRV8jVFx-zucfllSEgdRdwtfIGfSB1F3C18gZ9CAmG3lmIBsSU0wQnqOf9uWbx1jcmUSZSaAfRMoObPNy&_nc_ohc=S9eU1tiXGt0AX8u28G5&_nc_ht=scontent.fcnx4-1.fna&oh=03_AdR44tqI6B9S5fU0Y3pbkTLgHILED5qVYON2_W_qDDCpFg&oe=66100EF1',
  img4:'https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.15752-9/423735470_7460960967276695_6624932064291919348_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGBeo_ISyjRDvYvCP5V8FdLd6Q4oeO0Cpd3pDih47QKly9PdG8pLAqeaXTm3diEhbcIuW7477iwX01UxLxs-PDn&_nc_ohc=ItCvV4jqOWwAX8OlK7K&_nc_ht=scontent.fcnx4-1.fna&oh=03_AdQcwZ6ENIdqc2V_zXG4pTYNxPKr7Os46mdGOSboLnnVFg&oe=660FF074',
  img5:'https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.15752-9/398467369_751971583612786_3393677786155385029_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFnXEWj3M_Uh8YZuNOSwZgIeKGiP4r4Puh4oaI_ivg-6DOIq95lli0Jrut336Fyd-gIp0WSQBHfRHLVTYvDHeq6&_nc_ohc=RvFFrCudTB8AX-9_bII&_nc_ht=scontent.fcnx4-1.fna&oh=03_AdQn6nio4KI_x06iNnuF0kMeZ7I9TbSMjHufGKQ8LWlMfA&oe=661021DA',
  img6:'https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.15752-9/423600055_6496821513753648_6799113311213066907_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGqvTYfzrUFE5BkJVaKmVgswfGlBgwS2zHB8aUGDBLbMUUNWwunSSrFczjMQcbGjqNl6pzgGKGkdmvvZfkBxino&_nc_ohc=e3wiq-p1Z98AX9mS2TV&_nc_ht=scontent.fcnx4-1.fna&oh=03_AdRnr2KQXZgL4JOyQ64eRa6vYsw8ZX0CMWvB8W325JsHPw&oe=66101252',
}
function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>My hobby</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src={user.img1}/>
            <p>listen to music</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img2} />
            <p>play a game</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img3} />
            <p>play football</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img4} />
            <p>Watch a movie</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img5} />
            <p>Write a program</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img6} />
            <p>like to travel to the sea</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio