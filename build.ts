import rollup, { RollupWatchOptions, RollupOutput, RollupWatcher, RollupOptions, RollupBuild }from 'rollup';
import { normalize, resolve } from 'path';

declare const $g = {
    '@' : path.normalize(path.resolve());
};
const watchOpts : RollupWatchOptions = {
    input : $g["@"]
};
rollup.watch()