import path from 'path';
import fs from 'fs';
import resolve from '@rollup/plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import dts from 'rollup-plugin-dts';

const __dirname = process.cwd();

const packagesFiles = ['apps', 'packages', 'plugins'].map((dir) => {
    const dirPath = path.join(__dirname, dir);
    const files = fs.readdirSync(dirPath).filter((file) => {
        const filePath = path.join(dirPath, file, 'index.ts');
        const isFile = fs.existsSync(filePath);
        return isFile;
    })

    return files.map((file) => {
        return `${dir}/${file}`;
    })
}).flat();

function output(path) {
    return [
        {
            input: [`./${path}/index.ts`],
            output: [
                {
                    file: `./${path}/dist/index.cjs.js`,
                    format: 'cjs',
                    sourcemap: true,
                },
                {
                    file: `./${path}/dist/index.esm.js`,
                    format: 'esm',
                    sourcemap: true,
                },
                {
                    file: `./${path}/dist/index.js`,
                    format: 'umd',
                    name: 'monita',
                    sourcemap: true,
                },
                {
                    file: `./${path}/dist/index.min.js`,
                    format: 'umd',
                    name: 'monita',
                    sourcemap: true,
                    plugins: [uglify()],
                },
            ],
            plugins: [
                typescript({
                    tsconfigOverride: {
                        compilerOptions: {
                            module: 'ESNext',
                        },
                    },
                    useTsconfigDeclarationDir: true,
                }),
                resolve(),
                commonjs(),
                json(),
            ],
        },
        {
            input: `./${path}/index.ts`,
            output: [
                { file: `./${path}/dist/index.cjs.d.ts`, format: 'cjs' },
                { file: `./${path}/dist/index.esm.d.ts`, format: 'esm' },
                { file: `./${path}/dist/index.d.ts`, format: 'umd' },
                { file: `./${path}/dist/index.min.d.ts`, format: 'umd' },
            ],
            plugins: [dts()],
        },
    ];
}

const configs = packagesFiles.map((file) => {
    return output(file);
}).flat();

console.log(configs);
export default configs;



