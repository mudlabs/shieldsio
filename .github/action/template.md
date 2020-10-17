# Shields.io Endpoint

A repository of Shields.io endpoints.

## Table of Contents
- [How to Use](#how-to-use)
- [Contribute](#contribute)
- [Badges](#badges)


### How to Use
- Each badge is generated from a `json` file.
- [Shields.io](https://shields.io/) lets you display badges by passing a json endpoint.
- The `url` for all badges in this repo looks like this;
  - `https://raw.githubusercontent.com/mudlabs/shields.io.endpoint/badges/{{badge}}.json`, where `{{badge}}` is the badge filename.
- So you would create the _shields.io_ badge with `https://img.shields.io/endpoint?url={{raw-badge-url}}`


### Contribute
For a full list of available properties see the [Shields.io Endpoint Docs](https://shields.io/endpoint)
- To contribute a badge create a badge json file in the root of this directory.
- The `style` property must be set to `for-the-badge`.
- No need to update this README, the automated workflow will do that for you.
  > If your changes to a badge _don't_ render immediately it's _ok_, github caches raw content for 5 minutes; nothing we can do about it :unamused:


### Badges
{{badges.table}}


<!-- badges markdown goes here -->
{{badges.markdown}}
