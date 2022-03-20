#!/usr/bin/env -S deno run --allow-read --allow-write --allow-net --allow-env --allow-run
// Copyright 2022 Piano authors. All rights reserved. MIT license.

/**
 * This is the build script for building the oak framework into a Node.js
 * compatible npm package.
 *
 * @module
 */

 import { build, emptyDir } from "https://deno.land/x/dnt@0.20.0/mod.ts";
 import { copy } from "https://deno.land/std@0.126.0/fs/copy.ts";
 import { mappings, shims, compilerOptions, packageData } from './config.js';
 
 async function start() {
   await emptyDir("../npm");
 
   await build({
     entryPoints: ["../src/mod.ts"],
     outDir: "../npm",
     mappings: {...mappings},
     shims: {...shims},
     test: true,
     compilerOptions: {
       importHelpers: true,
       target: "ES2021",
        ...compilerOptions
     },
     package: {
       name: '',
       version: '',
       license: "MIT",
       engines: {
         node: ">=16.5.0 <18",
       },
       devDependencies: {
         "@types/node": "^16",
       },
       ...packageData,
     },
   });
 
   await Deno.copyFile("LICENSE", "npm/LICENSE");
   await Deno.copyFile("README.md", "npm/README.md");
 }
 
 start();