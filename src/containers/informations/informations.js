import React,{useState} from 'react';
import Information from './information/information';
import intjAvatar from '../../assets/avatars/INTJ.png';
import entjAvatar from '../../assets/avatars/ENTJ.png';
import infjAvatar from '../../assets/avatars/INFJ.png';
import enfjAvatar from '../../assets/avatars/ENFJ.png';
import intpAvatar from '../../assets/avatars/INTP.png';
import entpAvatar from '../../assets/avatars/ENTP.png';
import infpAvatar from '../../assets/avatars/INFP.png';
import enfpAvatar from '../../assets/avatars/ENFP.png';
import istjAvatar from '../../assets/avatars/ISTJ.png';
import estjAvatar from '../../assets/avatars/ESTJ.png';
import isfjAvatar from '../../assets/avatars/ISFJ.png';
import esfjAvatar from '../../assets/avatars/ESFJ.png';
import istpAvatar from '../../assets/avatars/ISTP.png';
import estpAvatar from '../../assets/avatars/ESTP.png';
import isfpAvatar from '../../assets/avatars/ISFP.png';
import esfpAvatar from '../../assets/avatars/ESFP.png';

const Informations=(props)=>{
    const[mbtiTypes,setMbtiTypes]=useState({
        'xxxx': {title:' xxxx ', avatarSrc:intjAvatar, mbti:'xxxx', description:' xxxx '},
        'intj': {title:' معمار ', avatarSrc:intjAvatar, mbti:'intj', description:' متفکران دارای تخیل و استراتژی که برای همه چیز برنامه دارند. '},
        'intp': {title:' منطق‌دان ', avatarSrc:intpAvatar, mbti:'intp', description:' مخترعان نوآور که عطش سیری‌ناپذیر برای دانش دارند. '},
        'infj': {title:' حامی ', avatarSrc:infjAvatar, mbti:'infj', description:' کمال‌گرایانی ساکت و پر رمز و راز، در عین حال بسیار الهام‌بخش و خستگی‌ناپذیر. '},
        'infp': {title:' میانجی ', avatarSrc:infpAvatar, mbti:'infp', description:' افراد شاعرمسلک، مهربان و نوع‌دوست، همیشه مشتاق کمک به هدفی خوب هستند. '},
        'istj': {title:' تدارکاتچی ', avatarSrc:istjAvatar, mbti:'istj', description:' افراد عمل‌گرا و واقع‌اندیش، کسانی که در قابل اعتماد بودنشان جای شکی نیست. '},
        'istp': {title:' چیره ‌دست ', avatarSrc:istpAvatar, mbti:'istp', description:' آزمایش‌کنندگانی جسور و عمل‌گرا، استادان همه نوع ابزار. '},
        'isfj': {title:' مدافع ', avatarSrc:isfjAvatar, mbti:'isfj', description:' محافظانی بسیار متعهد و گرم، همیشه آماده دفاع از عزیزان خود هستند. '},
        'isfp': {title:' ماجراجو ', avatarSrc:isfpAvatar, mbti:'isfp', description:' هنرمندانی انعطاف‌پذیر و جذاب، همیشه آماده کشف و تجربه چیزهای جدید هستند. '},
        'entj': {title:' فرمانده ', avatarSrc:entjAvatar, mbti:'entj', description:' رهبران جسور، دارای تخیل و اراده قوی که همیشه راه حلی را پیدا می‌کنند - یا حتی می‌سازند. '},
        'entp': {title:' مجادله‌گر ', avatarSrc:entpAvatar, mbti:'entp', description:' متفکران هوشمند و کنجکاو که نمی‌توانند در برابر وسوسه چالش فکری مقاومت کنند. '},
        'enfj': {title:' قهرمان ', avatarSrc:enfjAvatar, mbti:'enfj', description:' رهبران کاریزماتیک و الهام‌بخش، قادر هستند شنوندگان خود را هیپنوتیزم کنند. '},
        'enfp': {title:' پیکارگر ', avatarSrc:enfpAvatar, mbti:'enfp', description:' روح‌های آزاد مشتاق، خلاق و خوش‌مشرب که همیشه می‌توانند دلیلی برای لبخند پیدا کنند '},
        'estj': {title:' مجری ', avatarSrc:estjAvatar, mbti:'estj', description:' مدیران عالی، بی‌نظیر در مدیریت امور - یا مردم. '},
        'estp': {title:' کارآفرین ', avatarSrc:estpAvatar, mbti:'estp', description:' افرادی هوشمند، پرانرژی و بسیار اهل درک که واقعاً از زندگی کردن حاشیه لذت می‌برند. '},
        'esfj': {title:' سفیر ', avatarSrc:esfjAvatar, mbti:'esfj', description:' افرادی فوق‌العاده مراعاتگر، اجتماعی و محبوب، همیشه مشتاق کمک کردن هستند. '},
        'esfp': {title:' سرگرم کننده ', avatarSrc:esfpAvatar, mbti:'esfp', description:' افراد خودانگیخته، پرانرژی و مشتاق - زندگی کردن در اطراف آنها هرگز کسل‌کننده نیست '},
    });
    const mbtiType = mbtiTypes[props.mbtiType]
    let information = 
        <Information  
            title={mbtiType.title}
            avatarSrc={mbtiType.avatarSrc}
            mbti={mbtiType.mbti}
            description={mbtiType.description}
        />
   
    return information
}
export default React.memo(Informations);