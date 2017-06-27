# Switch between php modules in your httpd.conf

A simple script that lets you change witch php*_module to be used by commenting out the other in a httpd.conf file. I use this for easy local development with PHP on my Mac.

## Usage

```
$ httpd-php-switcher [path-to-httpd.conf] [version-number-of-php]
```

### The httpd.conf looks like:

```
LoadModule php5_module libexec/apache2/libphp5.so
#LoadModule php7_module /usr/local/php7/libphp7.so
```

### Then you run:

```
$ httpd-php-switcher /etc/apache2/httpd.conf 7
```

### The httpd.conf now looks like:

```
#LoadModule php5_module libexec/apache2/libphp5.so
LoadModule php7_module /usr/local/php7/libphp7.so
```

Use the code in test.php (<?php phpinfo(); ?>) to see php version.

Inspired by this post: [macOS 10.12 Sierra Apache Setup: Multiple PHP Versions](https://getgrav.org/blog/macos-sierra-apache-multiple-php-versions)

Download php from: [https://php-osx.liip.ch](https://php-osx.liip.ch)
