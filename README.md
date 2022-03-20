<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
![][typescript-image]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!--<a href="https://github.com/pianocms/stencil">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>-->

<h3 align="center">Piano CMS Package Template</h3>

  <p align="center">
    A project template for <a href="https://github.com/pianocms/core">Piano</a> packages. 
    <br />
  </p>
</div>

## How to develop packages
Piano packages are made by building against [Deno](https://deno.land) and compiled for Node using [dnt](https://github.com/denoland/dnt/), a Deno bundler that exports packages built for Deno for use in Node.js projects, with compatibility with both CommonJS and ESM module importing.

> All code should be exported to a `./mod.ts` file for dnt.

## Structure
- LICENSE.md
- README.md
- .github _(GitHub repo metadata)_
- src _(for code)_
- types _(for Typescript type declarations)_
- node-build.ts _(DNT script to build the NPM package)_

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/pianocms/stencil.svg?style=for-the-badge
[contributors-url]: https://github.com/pianocms/stencil/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/pianocms/stencil.svg?style=for-the-badge
[forks-url]: https://github.com/pianocms/stencil/network/members
[stars-shield]: https://img.shields.io/github/stars/pianocms/stencil.svg?style=for-the-badge
[stars-url]: https://github.com/pianocms/stencil/stargazers
[issues-shield]: https://img.shields.io/github/issues/pianocms/stencil.svg?style=for-the-badge
[issues-url]: https://github.com/pianocms/stencil/issues
[license-shield]: https://img.shields.io/github/license/pianocms/stencil.svg?style=for-the-badge
[license-url]: https://github.com/pianocms/stencil/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
