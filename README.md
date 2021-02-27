# Shieldsio
A repository of Shields.io endpoints.

## Table of Contents
- [How to Use](#how-to-use)
- [Contribute](#contribute)
- [Badges](#badges)


### How to Use
- Each badge is generated from a `json` file.
- [Shields.io](https://shields.io/) lets you display badges by passing a json endpoint.
- The `url` for all badges in this repo look like `https://raw.githubusercontent.com/mudlabs/shieldsio/endpoint/badges/{{badge}}.json`, where `{{badge}}` is the badge filename.
- So you would create the _shields.io_ badge with `https://img.shields.io/endpoint?url={{raw-badge-url}}`.


### Contribute
For a full list of available properties see the [Shields.io Endpoint Docs](https://shields.io/endpoint)
- To contribute a badge create a badge json file in the `badges` directory.
- The `style` property must be set to `for-the-badge`.
- No need to update this README, the automated workflow will do that for you.
  > If your changes to a badge _don't_ render immediately it's _ok_, github caches raw content for 5 minutes; nothing we can do about it :unamused:


### Badges
> [![github-action]](./badges/github-action.json)<br/>> `github-action`<br/>> [github-action.json](./badges/github-action.json)<br/><br/>
> [![github-sponsor]](./badges/github-sponsor.json)<br/>> `github-sponsor`<br/>> [github-sponsor.json](./badges/github-sponsor.json)<br/><br/>
> [![npm-version]](./badges/npm-version.json)<br/>> `npm-version`<br/>> [npm-version.json](./badges/npm-version.json)<br/><br/>



<!-- badges markdown goes here -->
[github-action]: https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/mudlabs/shieldsio/endpoint/badges/github-action.json
[github-sponsor]: https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/mudlabs/shieldsio/endpoint/badges/github-sponsor.json
[npm-version]: https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/mudlabs/shieldsio/endpoint/badges/npm-version.json

