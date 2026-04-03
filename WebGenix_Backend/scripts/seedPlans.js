import mongoose from 'mongoose';
import servicePlanSchema from '../src/models/serviceplans.js';
import dotenv from "dotenv";
dotenv.config();
await mongoose.connect(process.env.MONGO_URI);

const plans = [
  // Business Email
  { serviceId: 'business-email', planId: 'email-starter', name: 'Business Email – Starter', pricePaise: 29900, period: 'month' },
  { serviceId: 'business-email', planId: 'email-team',    name: 'Business Email – Team',    pricePaise: 79900, period: 'month' },
  { serviceId: 'business-email', planId: 'email-pro',     name: 'Business Email – Pro',     pricePaise: 149900, period: 'month' },
  // SSL
  { serviceId: 'ssl-standard',   planId: 'ssl-1y',        name: 'SSL Certificate – 1 Year', pricePaise: 79900,  period: 'year' },
  { serviceId: 'ssl-standard',   planId: 'ssl-2y',        name: 'SSL Certificate – 2 Years',pricePaise: 129900, period: '2 years' },
  // Wildcard SSL
  { serviceId: 'wildcard-ssl',   planId: 'wssl-1y',       name: 'Wildcard SSL – 1 Year',    pricePaise: 249900, period: 'year' },
  { serviceId: 'wildcard-ssl',   planId: 'wssl-2y',       name: 'Wildcard SSL – 2 Years',   pricePaise: 399900, period: '2 years' },
  // RapidSSL
  { serviceId: 'rapidssl',       planId: 'rssl-1y',       name: 'RapidSSL – 1 Year',        pricePaise: 49900,  period: 'year' },
  { serviceId: 'rapidssl',       planId: 'rssl-2y',       name: 'RapidSSL – 2 Years',       pricePaise: 79900,  period: '2 years' },
  // VPS
  { serviceId: 'vps',            planId: 'vps-1',         name: 'VPS-1',                    pricePaise: 79900,  period: 'month' },
  { serviceId: 'vps',            planId: 'vps-2',         name: 'VPS-2',                    pricePaise: 149900, period: 'month' },
  { serviceId: 'vps',            planId: 'vps-4',         name: 'VPS-4',                    pricePaise: 299900, period: 'month' },
  { serviceId: 'vps',            planId: 'vps-8',         name: 'VPS-8',                    pricePaise: 549900, period: 'month' },
  // Shared Hosting
  { serviceId: 'shared-hosting', planId: 'sh-starter',    name: 'Shared Hosting – Starter', pricePaise: 14900,  period: 'month' },
  { serviceId: 'shared-hosting', planId: 'sh-plus',       name: 'Shared Hosting – Plus',    pricePaise: 29900,  period: 'month' },
  { serviceId: 'shared-hosting', planId: 'sh-pro',        name: 'Shared Hosting – Pro',     pricePaise: 49900,  period: 'month' },
  // Bare Metal
  { serviceId: 'bare-metal',     planId: 'bm-e3',         name: 'Bare Metal – Intel E3',    pricePaise: 899900, period: 'month' },
  { serviceId: 'bare-metal',     planId: 'bm-e5',         name: 'Bare Metal – Intel E5',    pricePaise: 1499900,period: 'month' },
  // Backup
  { serviceId: 'backup-server',  planId: 'bk-50',         name: 'Backup – 50 GB',           pricePaise: 19900,  period: 'month' },
  { serviceId: 'backup-server',  planId: 'bk-200',        name: 'Backup – 200 GB',          pricePaise: 49900,  period: 'month' },
  { serviceId: 'backup-server',  planId: 'bk-500',        name: 'Backup – 500 GB',          pricePaise: 99900,  period: 'month' },
];

await servicePlanSchema.deleteMany({});
await servicePlanSchema.insertMany(plans);
console.log('✅ Seeded', plans.length, 'plans');
await mongoose.disconnect();