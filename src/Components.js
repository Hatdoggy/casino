import Spin,{Spinner,Chip} from './svg.js';
import {spinning,ActionRedirect} from './func.js';
import {Content} from './components/Main.js'

const Chips = ()=>{
	return(
		<div className="h-100 w-100 pos-abs z-neg chips">
			<img src="./img/chip.svg" alt="chip" className="w-50 chip-xs pos-abs"/>
			<img src="./img/chip.svg" alt="chip" className="w-50 chip-s pos-abs"/>
			<img src="./img/chip.svg" alt="chip" className="w-50 chip-m pos-abs"/>
			<img src="./img/chip.svg" alt="chip" className="w-50 chip-l pos-abs"/>
		</div>
	)
}

/* First thing the user sees */
const Greet = (prop)=>{
	const {mes} = window.data.landing;
	return(
		<section className="flx flx-col flx-jc-ce w-50 txt-wht h-100 p-50 fade greetMes bg-dark">
			<h1 className="w-50 slab greet">LUCKY DAYS</h1>
			<h4 className="rob w-30 m-t-5">{mes}</h4>
		</section>
	)
}

const Side = (prop)=>{
	const {side} = window.data.landing;
	const clicked = ()=>{
		const {upd,stats} = prop;
		upd({
			...stats,
			main:true,
			start:false
		})
	}
	return(
		<aside className="flx flx-col flx-jc-sb flx-ai-ce w-30 p-20 brd-wht2 brd txt-wht h-80 m-5 fade-r side">
			<img src="./img/phone.svg" alt="phone" className="svgImg"/>
			<div className="h-auto flx flx-col flx-jc-ce flx-ai-ce">
				<h2 className="slab txt-al-ce m-t-5">{side.head}</h2>
				<p className="txt-al-ce rob m-t-5">{side.mes}</p>
				<button className="p-20 brd btn-hlw slab txt-al-ce txt-wht w-80 m-t-5" onClick={clicked}>{side.btn}</button>
			</div>
		</aside>
	)
}

const PopCont = (props)=>{
	const {stats,hide,end,txt} = props;
	const {spins,cash} = stats;
	const {pop} = window.data;

	const clicked = async(id)=>{
		if(spins > 0){
			let delay = await spinning(spins);
			let res = (txt.head==="You won \nR")?cash+txt.mes:cash-txt.mes;
			hide({
				...stats,
				spins:spins-1,
				pop:false
			})
		}else{
			hide({
			...stats,
			spins:spins,
			cash:cash,
			pop:false		
			})
			ActionRedirect(id)			
		}	
	}

	return(
				<div className="brd flx flx-col flx-jc-sa flx-ai-ce brd-wht1 txt-wht p-20 h-100">
					{spins === 0&&<img src="./img/logo.svg" alt="win" className="w-10 w"/>}
					<div className="flx flx-col flx-jc-ce flx-ai-ce">
						<h2 className="slab slab-xb">{spins>0?`${txt.head} R${txt.mes}`:"Kudos!"}</h2>
						{spins>0?
						<p className="rob txt-al-ce">{window.data.popMes}</p>
						:
						<small className="rob txt-al-ce m-t-2 smol">{window.data.popTxt.mes1}<strong className="bold">{window.data.popTxt.bold}</strong>{window.data.popTxt.mes2}</small>
						}
					</div>	

					<div className="flx flx-col flx-jc-ce flx-ai-ce w-50 stat">
						{spins!=0&&	
						<div className="flx flx-jc-ce flx-ai-ce w-80">
							<span className="flx flx-jc-ce flx-ai-ce">
								<h4 className="rob txt-wht flx">{pop.bal}<p className="txt-gld m-l-5 rob-bld rob">{cash}</p></h4>
							</span>
							<span className="flx flx-jc-ce flx-ai-ce m-l-auto">
								<h4 className="rob txt-wht flx">{pop.spins}<span className="m-l-5 rob-bld rob">{spins}</span></h4>
							</span>
						</div>}
						<button className={`m-t-2 brd flx flx-ai-ce p-20 w-100 ${spins>0?"btn-wht":"btn-wht pulse txt-al-ce flx-jc-ce"} slab slab-b shdw-btn product-button`} data-product-id="1" onClick={(elem)=>clicked(elem.target.dataset.productId)}>{spins>0?pop.btn:"CLAIM WINNINGS!"} {spins>0&&<img src="./img/spin.svg" alt="spinner" className="w-10 rotating m-l-auto"/>}</button>						
					</div>

				</div>
	)
}

const Pop = (props)=>{
	return(
		<div className="pos-abs flx flx-jc-ce flx-ai-ce w-100 h-100 bg-pop z-top fade">
			<section className="bg-blue brd flx flx-col p-20 w-50 h-50 shdw-pop fade">
				<PopCont stats={props.stats} cash={props.cash} hide={props.hide} end={props.end} txt={props.txt}/>
			</section>
		</div>
	)
}

const EndSide = ()=>{
	const {end} = window.data;
	return(
		<aside className="flx flx-col flx-jc-sb flx-ai-ce w-30 p-20 brd-wht2 brd txt-wht h-80 m-5 fade-r end side">
			<img src="./img/end.svg" alt="end" className="svgImg"/>
			<div className="h-auto flx flx-col flx-jc-ce flx-ai-ce">
				<h2 className="slab txt-al-ce m-t-5">{end.head}</h2>
				<p className="txt-al-ce rob rob-bld m-t-5">{end.mes}</p>
				<p className="txt-al-ce rob m-t-5">{end.ins}</p>
				<button className="p-20 brd btn-grn slab txt-wht w-80 m-t-5 shdw-btn">{end.btn}</button>				
			</div>
		</aside>
	)
}

/* Ending sequence */
const End = ()=>{
	return(
		<main className="flx flx-jc-ce flx-ai-ce h-100 w-100 bg-blue">
			<Greet/>
			<EndSide/>
		</main>
	)	
}

const Intro = (prop)=>{
	return(
		<main className="flx flx-jc-ce flx-ai-ce h-100 w-100 bg-img pos-rel fade z-main">
			<Greet/>
			{/*<Chips/>*/}
			{
				prop.end?
				<EndSide/>
				:
				<Side upd={prop.upd} stats={prop.stats}/>
			}
		</main>
	)
}

const MobGreet = (prop)=>{

	const {roulette} = window.data;
	const clicked = ()=>{
		const {upd,stats} = prop;
		upd({
			...stats,
			main:true,
			start:false,
			mobMain:true
		})
	}

	return(
		<main className="h-100 w-100 bg-blue pos-rel fade z-main">
			<section className="flx flx-col flx-jc-ce flx-ai-ce w-auto p-20 txt-wht h-100 fade-r side grt-mob">
				<section className="h-80 flx flx-col flx-jc-sb flx-ai-ce p-20 brd brd-wht2 fade-t">

					<div className="flx flx-col flx-jc-ce flx-ai-ce">
						<img src="./img/logo.svg" alt="logo" className="w-30"/>
						<p className="txt-al-ce txt-gld rob m-t-2">{roulette.top}</p>					
					</div>

					<div className="flx flx-col flx-jc-ce flx-ai-ce">
						<img src="./img/run.png" alt="walk" className="w-50 mobImg"/>
						<p className="txt-al-ce txt-wht rob m-t-2 w-80">{roulette.imgMes}</p>					
					</div>
					<button className="m-t-2 brd flx flx-ai-ce p-10 w-80 btn-wht slab slab-b shdw-btn" onClick={clicked}>SPIN NOW! <img src="./img/spin.svg" alt="spinner" className="w-10 m-l-auto"/></button>
				</section>

				<footer className="h-20 txt-wht m-t-2 p-20 txt-al-ce fade-b">
					<small className="rob">{roulette.foot}</small>
				</footer>
			</section>
		</main>
	)
}

export default Chips;
export {Intro,End,Pop,MobGreet}