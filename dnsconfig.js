/*
   dnsconfig.js: dnscontrol configuration file for ORGANIZATION NAME.
*/

// Providers:

var REG_NONE = NewRegistrar("none");    // No registrar.
var DSP_DNSIMPLE = NewDnsProvider("dnsimple"); 

// Domains:

D("klinetechnology.net", REG_NONE, DnsProvider(DSP_DNSIMPLE),
    A("@", "216.40.34.41")
);
