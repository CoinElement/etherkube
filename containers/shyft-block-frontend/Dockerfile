FROM debian:jessie

MAINTAINER NGINX Docker Maintainers "docker-maint@nginx.com"

ENV NGINX_VERSION 1.15.5-1~jessie

# RUN apt-key adv --keyserver hkp://pgp.mit.edu:80 --recv-keys 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62 \
RUN apt-key adv --keyserver hkp://pgp.ustc.edu.cn/ --recv-keys 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62 \
	&& printf "deb http://mirrors.ustc.edu.cn/debian jessie main\ndeb http://mirrors.ustc.edu.cn/debian-security jessie/updates main\ndeb http://mirrors.ustc.edu.cn/debian jessie-updates main\n" > /etc/apt/sources.list \
	&& echo "deb http://mirrors.ustc.edu.cn/nginx/packages/mainline/debian/ jessie nginx" >> /etc/apt/sources.list \
	&& apt-get update \
	&& apt-get install --no-install-recommends --no-install-suggests -y \
	ca-certificates \
	nginx=${NGINX_VERSION} \
	nginx-module-xslt \
	nginx-module-geoip \
	nginx-module-image-filter \
	nginx-module-perl \
	nginx-module-njs \
	gettext-base \
	&& rm -rf /var/lib/apt/lists/*

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
	&& ln -sf /dev/stderr /var/log/nginx/error.log

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 443 8080

CMD ["nginx", "-g", "daemon off;"]