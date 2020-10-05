---
title: Getting started
---

Plausible Analytics is designed to be self-hosted via Docker. You don't have to be a Docker expert
to launch your own instance of Plausible Analytics. You should have a basic understanding of the command-line
and networking to succesfully set up your own instance of Plausible Analytics.

> NB: If you hit a snag with the setup, you can reach out to us on the [forum](https://plausible.discourse.group/). If you think something could be better explained in the docs, please open a PR on Github so the next person has a nicer experience. Happy hosting!

## Version management

Plausible follows [semantic versioning](https://semver.org/): `MAJOR.MINOR.PATCH`

You can find available Plausible versions on [DockerHub](https://hub.docker.com/r/plausible/analytics). The default
`latest` tag refers to the latest stable release tag. You can also pin your version:

* `plausible/analytics:v1` pins the major version to `1` but allows minor and patch version upgrades
* `plausible/analytics:v1.2` pins the minor version to `1.2` but allows only patch upgrades

None of the functionality is backported to older versions. If you wish to get the latest bug fixes and security
updates you need to upgrade to a newer version.

Version changes are documented in our [Changelog](https://github.com/plausible/analytics/blob/master/CHANGELOG.md).
Please note that database schema changes require running migrations when you're upgrading. However, we consider the schema
as an internal API and therefore schema changes are not considered a breaking change.

## Requirements

The only thing you need to insall Plausible Analytics is a server with Docker installed. For the Plausible Cloud
instance we use [Digital Ocean](https://m.do.co/c/91569eca0213) (affiliate link) but any hosting provider works. If
your server doesn't come with Docker pre-installed, you can follow [their docs](https://docs.docker.com/get-docker/) to install it.

## Up and running

### 1. Clone the hosting repo

To get started quickly, download the [plausible/hosting](https://github.com/plausible/hosting) repo as a starting point. It has everything you need
to boot up your own Plausible server.

```bash
$ git clone https://github.com/plausible/hosting
$ cd hosting
```

Alternatively, you can download and extract the repo as a tarball

```bash
$ curl -L https://github.com/plausible/hosting/archive/master.tar.gz | tar -x
$ cd hosting-master
```

In the downloaded directory you'll find two important files:
* `docker-compose.yml` - installs and orchestrates networking between your Plausible server, Postgres database, Clickhouse database (for stats), and an SMTP server. It comes with sensible defaults that are ready to go, although you're free to tweak the settings if you wish.
* `plausible-conf.env` - configures the Plausible server itself. Full configuration options are documented [here](/self-hosting-configuration).

### 2. Add required configuration

The configuration file has placeholders for required parameters. First, add your admin credentials in `plausible-conf.env`. Next,
generate a random 64-character secret key which will be used to secure the app. Here's a simple way to generate one:

```bash
$ openssl rand -base64 64
```

The last step is to enter the `BASE_URL` for your app. It should be the base url where this instance is accessible.

### 3. Start the server

Once you've entered your secret key base, base url and admin credentials, you're ready to start up the server:

```bash
$ docker-compose up --detach
```

When you run this command for the first time, it does the following:
* Creates a Postgres database for user data
* Creates a Clickhouse database for stats
* Runs migrations on both databases to prepare the schema
* Creates an admin account (which is just a normal account with a generous 100 years of free trial)
* Starts the server on port 80

You can now navigate to `http://{hostname}:80` and see the login screen.

> Something not working? Please reach out on our [forum](https://plausible.discourse.group/) for troubleshooting.

The Plausible server itself does not perform SSL termination (yet, feel free to contribute). It only runs on unencrypted HTTP.  If you want to run on HTTPS you also need to set up a reverse proxy in front of the server. We have instructions and examples of how to do that below.

## Optional extras

At this stage, you should have a basic installation of Plausible going. With some extra configuration, you can add functionality to
your instance:

### 1. MaxMind geolocation database

Plausible uses the GeoLite2 database created by [MaxMind](https://www.maxmind.com) for enriching analytics data with visitor countries. Their
end-user license does not make it very easy to just package the database along with an open-source product.

This is why, get country data for your analytics, you need to create an account [here](https://www.maxmind.com/en/geolite2/signup). Once you have your account details, open the `geoip/geoip.conf` file and enter your `GEOIP_ACCOUNT_KEY` and `GEOIP_LICENSE_KEY`. Then, combine both the base docker-compose file with the one in the geoip folder:

```bash
$ docker-compose -f docker-compose.yml -f geoip/docker-compose.geoip.yml up
```

The `geoip/docker-compose.geoip.yml` file downloads and updates the country database automatically, making it available to the `plausible`
container.
