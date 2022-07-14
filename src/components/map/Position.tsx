import React, { useEffect } from 'react';
import { getOfficeData, getShareData } from '../../redux/modules/map';
import { useAppDispatch } from '../../redux/configStore';

interface PositionProps {
	pos: any;
	name: string;
	router?: string | undefined;
	level: any;
}
const Position = (props: PositionProps) => {
	const appDispatch = useAppDispatch();

	const { pos, level, name, router } = props;

	useEffect(() => {
		if (name === 'share') {
			const shareInfo = {
				SWlat: pos.swLatLng.lat,
				SWlng: pos.swLatLng.lng,
				NElat: pos.neLatLng.lat,
				NElng: pos.neLatLng.lng,
				level: level,
			};
			appDispatch(getShareData(shareInfo));
		} else {
			const mapInfo = {
				SWlat: pos.swLatLng.lat,
				SWlng: pos.swLatLng.lng,
				NElat: pos.neLatLng.lat,
				NElng: pos.neLatLng.lng,
				level: level,
				depositlimit: router?.split('&')[0]?.split('=')[1],
				feelimit: router?.split('&')[1]?.split('=')[1],
			};
			appDispatch(getOfficeData(mapInfo));
		}
	}, []);
	return <React.Fragment></React.Fragment>;
};

export default Position;
