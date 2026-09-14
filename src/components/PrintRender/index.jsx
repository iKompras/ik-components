// React
import React, { useRef, useEffect, useState } from "react";

// Libraries
import { Header, Button } from "semantic-ui-react";
import { useReactToPrint } from "react-to-print";
import { isEmpty, map } from "lodash";
import PropTypes from "prop-types";
import moment from "moment";

// Utils
import { getTimeLabel } from "../../utils/functionality";
import { getClockLabel } from "../../utils/formats";

// Styles
import styles from "./styles.module.css";

const PrintRender = ({
	renderData,
	printHeader,
	printAction,
	printActionRetry,
	hiddenButon,
	clientName,
	clientPhone,
	platform,
	tags = [],
	group,
	state,
	alertColor,
	alertName,
	hideClientInfo = false,
	createdDate,
	handleBeforeGetContent = false,
	forceLeftUserInfo = true,
}) => {
	const componentRef = useRef(null);
	const [totalTime, setTotalTime] = useState(0);
	const totalTimeLabel = totalTime === 0 ? null : getClockLabel(totalTime);

	const shouldRenderUserLeft = forceLeftUserInfo || (isEmpty(clientName) && isEmpty(clientPhone) && isEmpty(tags) && isEmpty(group));

	useEffect(() => {
		if (printAction) {
			handlePrint();
		}
	}, [printAction]);

	const handlePrint = useReactToPrint({
		content: () => {
			if (!componentRef.current || !renderData.current) return null;

			const printElement = document.createElement("div");
			const header = componentRef.current.cloneNode(true);
			const body = renderData.current.cloneNode(true);

			const tableContainer = document.createElement("div");
			tableContainer.classList.add(styles.tableContainer);

			const containerCont = document.createElement("div");
			containerCont.classList.add(styles.containerCont);
			tableContainer.appendChild(containerCont).appendChild(body);
			printElement.appendChild(header).appendChild(tableContainer);

			return printElement;
		},
		onBeforeGetContent: async () => {
			if (handleBeforeGetContent) {
				const newTime = Math.floor(moment.duration(moment().diff(moment(createdDate))).asSeconds());
				setTotalTime(newTime);
			}
			await new Promise((resolve) => {
				return setTimeout(resolve, 100);
			});
		},
		onAfterPrint: () => {
			printActionRetry();
		},
	});

	return (
		<div>
			{!hiddenButon && <Button onClick={handlePrint} className={styles.printButton} primary icon="print" />}

			<div style={{ display: "none" }}>
				<div className={styles.container} ref={componentRef}>
					{/* <style>{getPageMargins()}</style> */}
					<div className={styles.containerCenter}>
						<Header as="h2" icon>
							<span className={styles.titleText}>{printHeader.company}</span>
							<Header.Subheader>{printHeader.title}</Header.Subheader>
							{(totalTimeLabel || state || alertName) && (
								<Header.Subheader className={styles.totalInfoRow}>
									<span className={`${styles.tag} ${styles[state.toLowerCase().replace(/\s+/g, "")]}`}>Tab </span>
									{state && <span className={`${styles.tag} ${styles[state.toLowerCase().replace(/\s+/g, "")]}`}>{state}</span>}

									{totalTimeLabel && <span className={styles.spaceClass}>{totalTimeLabel}</span>}
									{alertName && (
										<span className={styles.alertBadge} style={{ backgroundColor: alertColor }}>
											{alertName}
										</span>
									)}
								</Header.Subheader>
							)}

							{!isEmpty(printHeader.subTitle) && <Header.Subheader>{printHeader.subTitle}</Header.Subheader>}
						</Header>
					</div>

					{!hideClientInfo && (
						<div className={styles.containerBottom}>
							<div className={styles.containerLeft}>
								<div>
									<span className={styles.headerTitle}>Cliente:</span> {clientName}
								</div>

								{isEmpty(tags) && isEmpty(clientPhone) && (
									<div className={styles.pDate}>
										<span className={styles.headerTitlesss}>Usuario:</span>
										<span>{printHeader.user}</span>
									</div>
								)}
							</div>

							<div className={styles.containerLeftUser}>
								<div>
									<span className={styles.headerTitle}>Canal:</span> {platform}
								</div>

								{!isEmpty(tags) && isEmpty(clientPhone) && isEmpty(group) && (
									<div className={styles.pDate}>
										<span className={styles.headerTitlesss}>Usuario:</span>
										<span>{printHeader.user}</span>
									</div>
								)}

								{isEmpty(tags) && !isEmpty(clientPhone) && isEmpty(group) && (
									<div className={styles.pDate}>
										<span className={styles.headerTitlesss}>Usuario:</span>
										<span>{printHeader.user}</span>
									</div>
								)}

								{isEmpty(tags) && isEmpty(clientPhone) && isEmpty(group) && (
									<div className={styles.pDate}>
										<span className={styles.headerTitlesssDate}>Fecha:</span>
										<span>{getTimeLabel(new Date(), "DD/MM/YYYY, hh:mm A")}</span>
									</div>
								)}
							</div>

							{!isEmpty(clientPhone) && (
								<div className={styles.containerTelu}>
									<div>
										<span className={styles.headerTitle}>Teléfono:</span> {clientPhone}
									</div>

									{isEmpty(tags) && !isEmpty(group) ? (
										<div className={styles.pDate}>
											<span className={styles.headerTitlesss}>Usuario:</span>
											<span>{printHeader.user}</span>
										</div>
									) : isEmpty(tags) && isEmpty(group) ? (
										<div className={styles.pDate}>
											<span className={styles.headerTitlesssDate}>Fecha:</span>
											<span>{getTimeLabel(new Date(), "DD/MM/YYYY, hh:mm A")}</span>
										</div>
									) : null}
								</div>
							)}

							{!isEmpty(tags) && (
								<div className={styles.containerLeftUser}>
									<div>
										<span className={styles.headerTitle}>Etiquetas:</span>
										{map(tags, (tag, index) => {
											return (
												<span key={index} className={styles.tag}>
													{tag.name}
													{index < tags.length - 1 && <span>, </span>}
												</span>
											);
										})}
									</div>
									{!isEmpty(group) && (
										<div className={styles.pDate}>
											<span className={styles.headerTitlesss}>Usuario:</span>
											<span>{printHeader.user}</span>
										</div>
									)}
								</div>
							)}

							{!isEmpty(group) && (
								<div className={styles.containerLeftUser}>
									<div className={styles.containerLeftGroups}>
										<span className={styles.headerTitle}>Grupo:</span> {group}
									</div>
									<div className={styles.pDate}>
										<span className={styles.headerTitlesssDate}>Fecha:</span>
										<span>{getTimeLabel(new Date(), "DD/MM/YYYY, hh:mm A")}</span>
									</div>
								</div>
							)}
						</div>
					)}

					{hideClientInfo && (
						<div className={`${styles.fixedUserInfo} ${shouldRenderUserLeft ? styles.containerLeftUser : ""}`}>
							<div className={styles.containerRightUserRowContainer}>
								<div className={styles.containerRightUserRow}>
									<span className={styles.headerLabel}>Usuario:</span> <span>{printHeader.user}</span>
								</div>
								<div className={styles.containerRightUserRow}>
									<span className={styles.headerLabel}>Fecha:</span> <span>{getTimeLabel(new Date(), "DD/MM/YYYY, hh:mm A")}</span>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

PrintRender.propTypes = {
	renderData: PropTypes.any,
	printHeader: PropTypes.object,
	hiddenButon: PropTypes.bool,
	printAction: PropTypes.bool,
	printActionRetry: PropTypes.func,
	clientName: PropTypes.string,
	clientPhone: PropTypes.string,
	platform: PropTypes.string,
	tags: PropTypes.array,
	group: PropTypes.any,
	state: PropTypes.string,
	alertName: PropTypes.string,
	alertColor: PropTypes.string,
	hideClientInfo: PropTypes.bool,
	createdDate: PropTypes.string,
	handleBeforeGetContent: PropTypes.bool,
	forceLeftUserInfo: PropTypes.bool,
};

export default PrintRender;
