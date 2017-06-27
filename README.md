<h1>Switch between php modules in your httpd.conf</h1>

<p>A simple script that lets you change witch php*_module to be used by commenting out the other in a httpd.conf file. I use this for easy local development with PHP on my Mac.</p>

<h2>Usage</h2>

```
$ httpd-php-switcher [path-to-httpd.conf] [version-number-of-php]
```

<h3>The httpd.conf looks like:</h3>
```
LoadModule php5_module libexec/apache2/libphp5.so
#LoadModule php7_module /usr/local/php7/libphp7.so
```

<h3>Then you run:</h3>
```
$ httpd-php-switcher /etc/apache2/httpd.conf 7
```

<h3>The httpd.conf now looks like:</h3>
```
#LoadModule php5_module libexec/apache2/libphp5.so
LoadModule php7_module /usr/local/php7/libphp7.so
```

<p>Use the code in test.php (<?php phpinfo(); ?>) to see php version.</p>

<p>Inspired by this post: <a href="https://getgrav.org/blog/macos-sierra-apache-multiple-php-versions">https://getgrav.org/blog/macos-sierra-apache-multiple-php-versions</a></p>

<p>Download php from: <a href="https://php-osx.liip.ch">https://php-osx.liip.ch</a></p>
