---
title: Exporting Loan Records
excerpt: >-
  In this section you'll learn how to export loans to a CFPB pipe delimited
  formatted file.
seo:
  title: Exporting Loan Records
  description: Exporting Loan Records
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Exporting Loan Records
      keyName: property
    - name: 'og:description'
      value: Exporting Loan Records
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Exporting Loan Records
    - name: 'twitter:description'
      value: Exporting Loan Records
layout: docs
---
With HMDA Hero you can export loan records in a CFPB pipe delimited format using two methods discussed below

***

## Standard CFPB Export File

This is the default CFPB pipe delimited file. It will include all the fields present in the Excel file formatted to CFPB specifications.

![](/images/StandardCFPBExport.png)

## S2155 Exempt Export

Checking this option on the export will export all fields present in the Excel file formatted to CFPB specifications except fields that qualify for an S2155 exemption. For those fields, instead of the current data in the Excel file being exported, it will instead be replaced with the exemption code for that data point. This allows organizations to compile all HMDA data in the Excel file so they can retain this information while taking advantage of the S2155 exemptions HMDA allows. It is recommended that S2155 exempt organizations enter all data without regard to any S2155 exemptions and then use this export option when generating the export file. 

![](/images/S2155CFPBExport.png)

## Export File

Once a selection has been made on the type of export, click the Download Export File button to generate the CFPB formatted pipe delimited file. This file can then be uploaded during the HMDA filing process. 
