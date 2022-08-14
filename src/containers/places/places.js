import React,{useState} from 'react';
import Place from './place/place';
import intjLoc from '../../assets/locs/arasbaran.jpg';
import intpLoc from '../../assets/locs/tehran.jpg';
import infjLoc from '../../assets/locs/sabalan.jpg';
import infpLoc from '../../assets/locs/shooshtar.jpg';
import istjLoc from '../../assets/locs/masal.jpg';
import istpLoc from '../../assets/locs/neor.png';
import isfjLoc from '../../assets/locs/shiraz.jpg';
import isfpLoc from '../../assets/locs/latoon.jpg';
import entjLoc from '../../assets/locs/yazd.jpg';
import entpLoc from '../../assets/locs/kish.jpg';
import enfjLoc from '../../assets/locs/damavand.jpg';
import enfpLoc from '../../assets/locs/biston.jpg';
import estjLoc from '../../assets/locs/Isfahan.jpg';
import estpLoc from '../../assets/locs/rghz.jpg';
import esfjLoc from '../../assets/locs/loot.jpg';
import esfpLoc from '../../assets/locs/hormoz.jpg';

const Places=(props)=>{
    const[mbtiLocs,setMbtiLocs]=useState({
        'xxxx': {name:'xxxx', locSrc:intjLoc, description:' xxxx '},
        'intj': {name:' ارسباران ', locSrc:intjLoc, description:' سکوت و آرامش در میون این همه زیبایی و شگفتی میتونید پیدا کنید مکانی با خاصترین پوشش های گیاهی و جانوری '},
        'intp': {name:' تهران ', locSrc:intpLoc, description:' تهران مدرنترین و قدیمیترین. جمیع اضداد رو در این شهر باید دید '},
        'infj': {name:' سبلان ', locSrc:infjLoc, description:' سبلان، عروس قلل ایران '},
        'infp': {name:' شوشتر ', locSrc:infpLoc, description:' از حجم زیبایی هنر معماری و طراوت آب روحت نفسی دوباره میکشه '},
        'istj': {name:' ماسال ', locSrc:istjLoc, description:' برای تماشای بی نظیرترین چشم اندازهای جنگلی کشور و همچنین پدیده اقیانوس ابر، می توانید به ییلاقات ماسال در استان گیلان سری بزنید '},
        'istp': {name:' نئور تا سوباتان ', locSrc:istpLoc, description:' زیباست و دلفریب '},
        'isfj': {name:' شیراز ', locSrc:isfjLoc, description:' شهر عشق، ادبیات، تاریخ و باغ‌های ایرانی است. شیراز زادگاه دو شاعر بلند آوازه و نامدار ایرانی حافظ و سعدی و مرکز فرمانروایی امپراطوری هخامنشی است '},
        'isfp': {name:' آبشار لاتون ', locSrc:isfpLoc, description:' آبشار لاتون، یکی از بی نظیر ترین جاذبه های طبیعی ایران است. اگر در استان گیلان هستید، حتما برای تماشای مرتفع ترین آبشار ایران، به شهرستان آستارا بروید. '},
        'entj': {name:' یزد ', locSrc:entjLoc, description:' یزد با ارامش و زیبایی منحصر به فردش زمانی برای پیدا کردن خود به ادم هدیه میده '},
        'entp': {name:' کیش ', locSrc:entpLoc, description:' یه جزیره با یه شهر همیشه بیدار برای وقتیکه میخوای دور از استرس کار و زندگی فقط خوش بگذرونی '},
        'enfj': {name:' دماوند ', locSrc:enfjLoc, description:' شکوه و عظمتی که بعد از صعود باعث میشه دیگه اون ادم قبلی نباشی '},
        'enfp': {name:' کرمانشاه', locSrc:enfpLoc, description:' شگقتی‌ای مرکب از تاریخ و فرهنگ و هنر '},
        'estj': {name:' اصفهان ', locSrc:estjLoc, description:' یکی از توریستی‌ترین شهرهای ایران و بی شک یکی از زیباترین شهرهای جهان است. بی دلیل نیست که لقب« اصفهان، نصف جهان» را به این شهر بی‌همتا داده‌اند '},
        'estp': {name:' تنگه رغز ', locSrc:estpLoc, description:' زیبایی سرشار از هیجان،‌ بعضی وقتا برای دیدن و درک زیبایی باید جرات به خرج داد '},
        'esfj': {name:' دشت لوت ', locSrc:esfjLoc, description:' داغ ترین دمایی که تا به حال در کل دنیا گزارش شده، ۷۰.۷ درجه بوده که در دشت لوت ایران به ثبت رسیده است '},
        'esfp': {name:' هرمز ', locSrc:esfpLoc, description:' یه جزیره آروم و رنگی رنگی که میتونی ساعتها یه گوشه دنج بشینی و وقتی صدای امواج آب روحتو نوازش میکنه، تو شگفتی هاش غرق شی '},
    });
    const mbtiLoc = mbtiLocs[props.mbtiType]
   
    let place = 
    <Place  
        name={mbtiLoc.name}
        locSrc={mbtiLoc.locSrc}
        description={mbtiLoc.description}
    />
    return (place)
}
export default React.memo(Places);