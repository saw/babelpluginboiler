import pluginTester from 'babel-plugin-tester';
import plugin from '../index';
import { join } from 'path';

pluginTester({
    plugin,
    pluginName: "My plugin",
    fixtures: join(__dirname, '__fixtures__'),
})