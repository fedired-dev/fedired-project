# Aviso para administradores de servidores

Puede omitir las versiones intermedias al actualizar desde una versión anterior, pero lea los avisos y siga las instrucciones para cada versión intermedia antes de [actualizar](https://github.com/fedired-dev/fedired/-/blob/main/docs/upgrade.md).

## v2024.10.02

### Para usuarios de systemd/pm2

- La versión requerida de Node.js ha sido actualizada de v18.16.0 a v18.17.0.
- Debe instalar PGroonga en su sistema. Siga las instrucciones a continuación.

[Editar (2024/03/23 23:55 UTC+9)] ~~**Advertencia**: Es posible que no pueda instalar PGroonga, ya que el registro de paquetes de Apache Arrow (una de las subdependencias de PGroonga) está actualmente inactivo ([problema de GitHub](https://github.com/apache/arrow/issues/40759)). Le recomendamos que espere a actualizar hasta que se resuelva este problema.~~

[Editar (2024/03/25 22:31 UTC+9)] El repositorio Apache Arrow está nuevamente en funcionamiento.

#### 1. Instalar PGroonga

Ejecute `psql --version` para comprobar su versión principal de PostgreSQL. Esto mostrará un mensaje como este:

```text
psql (PostgreSQL) 16.1
```

En este caso, su versión principal de PostgreSQL es `16`.

Existen instrucciones de instalación oficiales para muchos sistemas operativos en <https://pgroonga.github.io/install>, por lo que le recomendamos que siga las instrucciones de esta página. Sin embargo, dado que muchos usuarios utilizan Ubuntu LTS o Debian, y no existen instrucciones para Arch Linux y Fedora, aquí enumeramos explícitamente las instrucciones para Ubuntu LTS, Debian, Arch Linux y Fedora. Tenga en cuenta que esta no es información oficial y que los procedimientos pueden cambiar.

### Ubuntu LTS

1. Instalar subdependencias
    ```sh
    sudo apt install -y software-properties-common
    sudo add-apt-repository -y universe
    sudo add-apt-repository -y ppa:groonga/ppa
    sudo apt install -y wget lsb-release
    wget https://packages.groonga.org/ubuntu/groonga-apt-source-latest-$(lsb_release --codename --short).deb
    sudo apt install -y -V ./groonga-apt-source-latest-$(lsb_release --codename --short).deb
    ```
2. Instalar PGroonga (reemplace `16` con su versión de PostgreSQL)
    ```sh
    sudo apt install postgresql-16-pgdg-pgroonga

    # Depending on your PostgreSQL installation method,
    # the above command may fail and you need to run
    # the following instead:
    # sudo apt install postgresql-16-pgroonga
    ```

### Debian

1. Instalar subdependencias
    ```sh
    sudo apt install -y -V ca-certificates lsb-release wget
    wget https://apache.jfrog.io/artifactory/arrow/$(lsb_release --id --short | tr 'A-Z' 'a-z')/apache-arrow-apt-source-latest-$(lsb_release --codename --short).deb
    sudo apt install -y -V ./apache-arrow-apt-source-latest-$(lsb_release --codename --short).deb
    wget https://packages.groonga.org/debian/groonga-apt-source-latest-$(lsb_release --codename --short).deb
    sudo apt install -y -V ./groonga-apt-source-latest-$(lsb_release --codename --short).deb
    ```
2. Instalar PGroonga (reemplace `16` con su versión de PostgreSQL)
    ```sh
    sudo apt install postgresql-16-pgdg-pgroonga

    # Depending on your PostgreSQL installation method,
    # the above command may fail and you need to run
    # the following instead:
    # sudo apt install postgresql-16-pgroonga
    ```

