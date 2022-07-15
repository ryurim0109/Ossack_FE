import { instance } from '../../shared/api';

export const requestShareMapInfo = async ({ shareMapInfo }) => {
	const { data } = await instance.get(
		`/map/sharedoffice?level=${shareMapInfo.level}&SWlat=${shareMapInfo.SWlat}&SWlng=${shareMapInfo.SWlng}&NElat=${shareMapInfo.NElat}&NElng=${shareMapInfo.NElng}`,
	);

	return { shareList: data };
};
