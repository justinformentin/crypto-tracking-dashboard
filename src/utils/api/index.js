import * as cmcApi from './cmcApi';
import * as polonoiexApi from './polonoiexApi';
import * as redditApi from './redditApi';

export {cmcApi, polonoiexApi, redditApi}
export default {
    cmc: cmcApi,
    polonoiex: polonoiexApi,
    reddit: redditApi
}