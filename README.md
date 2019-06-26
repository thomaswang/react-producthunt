<p align="center">
  <img src="https://www.dropbox.com/s/gx8kcqew6u2blrz/react-ph.jpg?raw=1" alt="React Product Hunt" width="150">
</p>

# React Components for Product Hunt [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fthomaswangio%2Freact-producthunt&via=thomaswangio&text=Check%20out%20these%20nifty%20React%20Components%20made%20for%20Product%20Hunt%20users%21)

> React Components for Product Hunt users

[![NPM](https://img.shields.io/npm/v/react-producthunt.svg)](https://www.npmjs.com/package/react-producthunt) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Requirements

Requires React and a Product Hunt account!

## Installation

```bash
yarn add react-producthunt
# or
npm install --save react-producthunt
```

## Components

### 1. Ship Widget Component

The Ship widget is a little bubble that appears on the bottom left or bottom right of the page that lets you capture email subscribers. See more about Ship at https://www.producthunt.com/ship.

<img src="https://www.dropbox.com/s/q16zkkwzr3qu9tz/ship-widget.png?raw=1" alt="React Product Hunt" width="400">

ES6 import

```js
import { ShipWidget } from "react-producthunt";
```

JSX (example)

```jsx
<ShipWidget appId={12345} position="bottomLeft">
```

Props

- `appId`: `Number`

  - Default: No default
  - Options: You can find your App ID in your Ship dashboard at a URL like this:
    > `https://www.producthunt.com/my/upcoming/[your-upcoming-product]/embed`

- `position`: `String`
  - Default: `"bottomLeft"`
  - Options: `"bottomLeft"` or `"bottomRight"`

### 2. Badge Component

A badge component based off of LinkedIn's Badges that you can put on your site to show off your Product Hunt profile.

#### Light Badge

  <img src="https://www.dropbox.com/s/pdmxxdk869h8nuq/light-badge.png?raw=1" alt="React Product Hunt" width="400">

#### Dark Badge

  <img src="https://www.dropbox.com/s/u1spt0xqgnjbvhi/dark-badge.png?raw=1" alt="React Product Hunt" width="400">

ES6 import

```js
import { Badge } from "react-producthunt";
```

JSX (example)

```jsx
<Badge username="thomaswangio" darkMode={true}>
```

Props

- `username`: `String`

  - Default: No default
  - Options: Any Product Hunt username!

- `darkMode`: `Boolean`
  - Default: `false`
  - Options: `true` or `false`

## Future

This package is open for PR's of any kind! There's room for many creative components using the Product Hunt API. See the [Product Hunt API GitHub Repo](https://github.com/producthunt/producthunt-api) for their starter kit and more references on what data you can pull.

## Makers Festival

This package was made for Product Hunt's [Makers Festival 2019 - API Edition](https://www.producthunt.com/makers-festival/product-hunt-api-2-0).

## License

MIT © [thomaswangio](https://github.com/thomaswangio)
