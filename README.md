# DOH Clouflare NextDNS

[Tiếng Việt](#tiếng-việt) | [English](#english)

## Tiếng Việt

### Mô Tả
Code giúp bạn gộp nhiều tài khoản free NextDNS thành 1 link profile để dùng cho PC/IOS. Hiện Android chưa hỗ trợ phương thức này
Mặc định NextDNS chỉ cho bạn 300k querries/tháng, code sẽ giúp bạn xoay tua thứ tự dùng account NextDNS sẽ không lo hết

### Tạo tài khoản NextDNS
Truy cập [My NextDNS](https://my.nextdns.io/signup) để tạo tài khoản, mình mặc định là tạo 10 tài khoản, còn bạn muốn tạo bao nhiêu thì tuỳ thích

### Cloudflare Worker
1. Vào [Cloudflare Dashboard](https://dash.cloudflare.com/), chọn Worker & Pages, click Create Application > Create Worker(đặt tên tuỳ ý), sau đó ấn Deploy, url worker sẽ tự động tạo để truy cập

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/captajn/DOH-Clouflare-NextDNS)
2. Copy toàn bộ nội dung file index.js và dán vào worker của bạn

3. Thay đổi info ở dòng https://dns1.nextdns.io/xxxx thay xxxx thành profileid NextDNS của bạn
4. Dùng link url Worker đã tạo và dùng cho các thiết bị của bạn có hỗ trợ DOH

## English

### Description
Code helps you create multiple free NextDNS accounts into one profile link to use on PC/IOS. This method is currently not supported on Android
By default NextDNS only gives you 300k queries/month, the code will help you rotate the order of NextDNS accounts so it won't run out.

### Create account NextDNS
Access [My NextDNS](https://my.nextdns.io/signup) and create many free accounts you want

### Cloudflare Worker
1. Access [Cloudflare Dashboard](https://dash.cloudflare.com/), Worker & Pages, click Create Application > Create Worker and Deploy, url Worker you will get to use later 

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/captajn/DOH-Clouflare-NextDNS)

2. Copy index.js and paste to your Clouflare Worker
3. Change info of your account NextDNS on const dohEndpoints = [
4. Use url Worker before to use with your devices
