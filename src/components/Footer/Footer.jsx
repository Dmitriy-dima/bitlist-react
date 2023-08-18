import React from 'react'
import styles from '../../styles/Footer.module.css'
import bitlistLogo from '../../images/logo_footer.svg';
import telegramIcon from '../../images/telegram.svg';
import facebookIcon from '../../images/facebook.svg';
import twitterIcon from '../../images/twitter.svg';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerWrapper}>
				<div className={styles.footerLeft}>
					<img src={bitlistLogo} alt="Logo" className={styles.footerLogo} />
					<div className={styles.footerSocial}>
						<img src={telegramIcon} alt="Social Icon 1" />
						<img src={facebookIcon} alt="Social Icon 2" />
						<img src={twitterIcon} alt="Social Icon 3" />
					</div>
					<div className={styles.footerButtons}>
						<button className={styles.footerButton}>Register</button>
						<button className={styles.footerButton}>Log In</button>
					</div>
				</div>
				<div className={styles.footerCenter}>
					<p className={styles.footerCopyright}>Bitlist© All Rights Reserved</p>
				</div>
				<div className={styles.footerRight}>
					<div className={styles.footerRightColumn}>
						<p>Trade</p>
						<p>P2P</p>
						<p>Partners</p>
						<p>Mining</p>
						<p>Academy</p>
					</div>
					<div className={styles.footerRightColumn}>
						<p>Privacy policy</p>
						<p>Terms of rules</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
