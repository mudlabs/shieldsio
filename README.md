# Shields.io Endpoint

A repository of Shields.io badges.

## Table of Contents
- [How to Use](#how-to-use)
- [Contribute](#contribute)
- [Badges](#badges)


### How to Use
- Each badge is generated from a `json` file.
- [Shields.io](https://shields.io/) lets you display badges by passing a json endpoint.
- The `url` for all badges in this repo looks like this;
  - `https://raw.githubusercontent.com/mudlabs/shields.io.endpoint/badges/undefined.json`, where `undefined` is the badge filename.
- So you would create the _shields.io_ badge with `https://img.shields.io/endpoint?url={{raw-badge-url}}`


### Contribute
- To contribute a badge just create your badge file in the root of this directory.
- Don't worry about adding your badge to this README, the automated workflow will do that.
- The `style` property must be set to `for-the-badge`.
- For full list of available properties see the [Shields.io Endpoint Docs](https://shields.io/endpoint)


### Badges
| Name | Badge | File |
| --- | --- | --- |
| `github-sponsor` | [![github-sponsor]](./github-sponsor.json) | [github-sponsor.json](./github-sponsor.json) |



<!-- badges markdown goes here -->
[github-sponsor]: https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/mudlabs/shields.io.endpoint/badges/github-sponsor.json
