# cicd 구성

| 가상 환경 | 서버       |
| --------- | ---------- |
| AWS       | production |
| GCP       | staging    |
| GCP       | develop    |

### production

![](https://user-images.githubusercontent.com/55802893/224251108-32a2cb05-5455-4d2c-bdc2-a0ea1203bca2.png)

-   AWS에서 실제 운영되는 환경을 위한 jenkins job

### staging

![](https://user-images.githubusercontent.com/55802893/224251285-4bb24806-d2cc-4c09-bddd-09d025184717.png)

-   배포 전 테스트를 위한 staging 서버 구성 jenkins job

### develop

![](https://user-images.githubusercontent.com/55802893/224251410-6e3933fb-b449-47a2-a380-2dddb8f1e208.png)

-   개발 환경 구성을 위한 jenkins job
