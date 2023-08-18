import React, { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';

import Graph from '../../images/Frame.svg';
import decenImage from '../../images/decen_btn.svg';
import inchImage from '../../images/1INCH.svg';
import btcImage from '../../images/BTC.svg';
import ethImage from '../../images/ETH.svg';
import bnbImage from '../../images/BNB.svg';
import busdImage from '../../images/BUSD.svg';
import maticImage from '../../images/MATIC.svg';


const assetSymbols = ['1inch', 'BTC', 'ETH', 'BUSD', 'MATIC'];
const assetNames = {
  '1inch': '1inch',
  BTC: 'Bitcoin',
  ETH: 'Ethereum',
  BNB: 'Binance Coin',
  BUSD: 'Binance USD',
  MATIC: 'Polygon',
};
const assetImages = {
  '1inch': inchImage,
  BTC: btcImage,
  ETH: ethImage,
  BNB: bnbImage,
  BUSD: busdImage,
  MATIC: maticImage,
};


const Home = () => {
	// 1. Объявить состояния для активов и флаг первоначальной выборки
	const [assets, setAssets] = useState([]);
	const [initialFetch, setInitialFetch] = useState(true);
  
	useEffect(() => {
	  // 2. Определите асинхронную функцию для получения данных
	  const fetchData = async () => {
		try {
		  const newAssets = [];
		  for (const symbol of assetSymbols) {
			const url = `https://api.coinbase.com/v2/prices/${symbol}-USD/spot`;
			const response = await fetch(url); // Получение данных для каждого символа
  
			// 3. Если ответ не устраивает, занесите предупреждение в журнал и двигайтесь дальше
			if (!response.ok) {
			  console.warn(`Failed to fetch ${symbol}: ${response.statusText}`);
			  continue;
			}
  
			// 4. Извлечение суммы и вычисление изменения
			const data = await response.json();
			const amount = data && data.data && data.data.amount;
			if (!amount) {
			  console.warn(`Amount not found for ${symbol}`);
			  continue;
			}
  
			const currentPrice = parseFloat(amount);
			const previousAsset = assets.find((asset) => asset.name === assetNames[symbol]);
			const previousPrice = previousAsset ? previousAsset.price : null;
			const change = previousPrice ? ((currentPrice - previousPrice) / previousPrice) * 100 : 0;
  
			// 5. Поместить актив в массив newAssets
			newAssets.push({
			  name: assetNames[symbol] || symbol,
			  baseName: symbol,
			  price: currentPrice,
			  change: change,
			  volume: "2.000.000M",
			  image: assetImages[symbol],
			});
		  }
  
		  // 6. Обновление состояния активов
		  setAssets(newAssets);
		} catch (error) {
		  console.error('An error occurred:', error); // Вылавливание непредвиденных ошибок
		}
	  };
  
	  // 7. Первоначальная выборка данных
	  if (initialFetch) {
		fetchData();
		setInitialFetch(false);
	  }
  
	  // 8. Установка интервала для получения данных каждые 60 секунд
	  const intervalId = setInterval(fetchData, 60000);
  
	  // 9. Очистка интервала при отключении компонента
	  return () => clearInterval(intervalId);
	}, [assets, initialFetch]); // 10. Повторное выполнение эффекта при изменении активов или initialFetch
  
		
	const logos = [
	'logo_binance',
	'logo_bybit',
	'logo_bitfinex',
	'logo_crypto',
	'logo_kraken',
	'logo_coinbase',
	];
	const Card = ({ icon, title, subtext }) => (
		<div className={styles.card}>
		  <img src={require(`../../images/${icon}.svg`)} alt={title} className={styles.cardIcon} />
		  <h3 className={styles.cardTitle} style={{ width: '211px', color: '#D5EAFF' }}>{title}</h3>
		  <p className={styles.cardSubtext} style={{ width: '307px', color: '#464E62' }}>{subtext}</p>
		</div>
	  );
	// Функциональный компонент, возвращающий стилизованную карточку с иконкой, заголовком и подтекстом.
	const cards = [
	{ icon: 'user_safe', title: 'User Safe Asset Fund (SAFU)world.', subtext: 'Bitlist holds 10% of all trading fees in a protected asset fund to protect a portion of user funds.' },
	{ icon: 'user_access', title: 'User Access Control', subtext: 'Personalized access control allows you to limit the devices and addresses that can access your account.' },
	{ icon: 'user_encrypt', title: 'Improved data encryption', subtext: 'Your transaction data is encrypted - only you can access your personal data.' },
	{ icon: 'user_support', title: 'Support 24/7', subtext: '24/7 real-time support is always ready to help you.' },
	{ icon: 'user_withdraws', title: 'Fast replineshments and withdraws', subtext: 'Transfer funds to and from your accounts quickly and easily.' },
	{ icon: 'user_p2p', title: 'Comfortable P2P platform', subtext: 'Top up your account in any convenient way on the P2P platform at favorable rates.' },
	];
	return (
	  <div className={styles.home}>
		<div className={styles.homeWrapper}>
			<div className={styles.topSection}>
				<div className={styles.left}>
				<p className={styles.smallText}><img src={decenImage} alt='DECENTRALIZED CRYPTO PLATFORM'></img>DECENTRALIZED CRYPTO PLATFORM</p>
				<h1 className={styles.largeText}>Buy, trade and store cryptocurrencies</h1>
				<div className={styles.signIn}>
					<input className={styles.emailInput} type="email" placeholder="Example@gmail.com" />
					<button className={styles.signInButton}>Sign In</button>
				</div>
				</div>
				<div className={styles.right}>
				<img className={styles.image} src={Graph} alt="Crypto" />
				</div>
			</div>
			<div className={styles.tableSection}>
				<div className={styles.tableContainer}>
					<table className={styles.assetTable}>
						<thead>
							<tr>
							<th>Asset</th>
							<th>Price</th>
							<th>Change</th>
							<th>Volume</th>
							<th></th>
							</tr>
						</thead>
						<tbody>
							{assets.map((asset, index) => (
								<tr key={index}>
									<td>
										<div className={styles.assetWrapper}>
										<img src={asset.image || `path/to/${asset.name}.icon`} alt={`${asset.name} Icon`} />
										<span className={styles.assetName}>{asset.name}</span>
										<span className={styles.baseName}> {asset.baseName}</span>
										</div>
									</td>
									<td style={{ color: "#C7E1FF" }}>$ {asset.price.toLocaleString()}</td>
									<td style={{ color: Math.abs(asset.change) < 0.00001 ? "#C7E1FF" : (asset.change > 0 ? "#58F0A7" : "#F94B55") }}>
									{asset.change.toFixed(4)}%
									</td>		
									<td>{asset.volume}</td>
									<td><button className={styles.tradeButton}>Trade</button></td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<button className={styles.allAssetsButton}>All Assets</button>
			</div>
			<div className={styles.guideSection}>
				<div className={styles.leftGuide}>
					<h2 className={styles.title}>Bitles is your reliable guide in the world of digital assets</h2>
					<p className={styles.subtext}>The Bitles app is a comprehensive solution for trading digital assets. Buy and sell cryptocurrencies quickly and openly, comfortably and safely from anywhere in the world.</p>
				</div>
				{/*Сопоставление логотипов и отображение их в виде изображений.>*/}
				<div className={styles.rightGuide}>
					{logos.map((logo, index) => (
						<img key={index} src={require(`../../images/${logo}.svg`)} alt={`Logo ${index}`} className={styles.logo} />
					))}
				</div>
			</div>
			{/* Сопоставление карт и рендеринг компонента Card с соответствующими реквизитами.*/}
			<div className={styles.cardSection}>
				{cards.map((card, index) => (
				<Card key={index} {...card} />
				))}
			</div>
			<div className={styles.registerSection}>
				<p className={styles.registerPrompt}>Register your account now and start to trade</p>
				<div className={styles.signIn}>
					<input className={styles.emailInput} type="email" placeholder="Example@gmail.com" />
					<button className={styles.signInButton}>Sign In</button>
				</div>
			</div>
		</div>
	  </div>
	);
  };

export default Home;
