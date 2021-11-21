function getURLParameter(name) {
  return decodeURI(
    (RegExp(name + '=' + '(.+?)(&|$)').exec(window.location.search)||[,null])[1] || '');
}

let subid       = getURLParameter('subid');
let subid2      = getURLParameter('subid2');
let firstname   = getURLParameter('firstname');
let surname     = getURLParameter('surname');
let city        = getURLParameter('city');
let zipcode     = getURLParameter('zipcode');
let address     = getURLParameter('address');
let phone       = getURLParameter('phone');
let mobile      = getURLParameter('mobile');
let pid         = getURLParameter('pid');
let nrp         = getURLParameter('nrp');

let ffdomain = 'https://' + getURLParameter('ffdomain');
let session = getURLParameter('session');
let fluxf = getURLParameter('fluxf');
let fluxffn = getURLParameter('fluxffn');

export function ActionRedirect(action){
    window.location.replace(ffdomain + '/?flux_action=' + action + '&flux_f=' + fluxf + '&flux_ffn=' + fluxffn + '&flux_sess=' + session);
}
  
  let deg = 0;
  let point = 0;
  let spins = 0;

  export const pos = ()=>{
    let svg = document.querySelector('#spinnerSvg');
    let {left,top} = document.querySelector('#pointer').getBoundingClientRect();
    point = {left,top};
    return new Promise(resolve => resolve (document.elementFromPoint(Math.floor(left),Math.floor(top))))
  }

  const check = ()=>{
    let choices = [2250,3400,1750];
    return spins===3?2250:1485;
  }

  export const spinning = async(ctr) => {
    let wheel = document.querySelectorAll('.wheel');
    let {x,y} = document.querySelectorAll('[data-status="jackpot"]')[0].getBoundingClientRect();

    spins = ctr;

    if(ctr > 1){
     deg = check();
    }else{
      deg = 1800;
    }

    wheel.forEach(elem=>{
      elem.style.transition = 'all 5s ease-out';
      elem.style.transform = `rotate(${deg}deg)`;
      elem.classList.add('blur');      
    })
    return deg;
  };

export const end = (data) => {
    let wheel = document.querySelectorAll('.wheel');
    console.log('You went here')
    wheel.forEach(elem=>{
      let actualDeg = 0;
      elem.classList.remove('blur');
      elem.style.transition = 'none';
      actualDeg = deg % 360;       
      elem.style.transform = `rotate(${actualDeg}deg)`;      
    })
  };