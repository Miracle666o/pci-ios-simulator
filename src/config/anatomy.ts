export const ANATOMY={unit:'1 scene unit = 1 mm',heart:{rx:42,ry:58,rz:35},access:{root:820},lad:{reference:2.95,length:128,d1:35,lesionStart:48,lesionLength:14,d2:76,stenosis:.9}} as const;
export const DEVICES={guide:{french:6,engageTolerance:25,popoutTorque:40},wire:{inch:.014,safeSpeed:8},balloon:{diameters:[2,2.5,3,3.5],lengths:[12,15,20],nominal:8,rbp:14,compliance:.015,rupture:18},stent:{diameters:[2.5,2.75,3,3.5,4],lengths:[12,15,18,23,28],nominal:10,rbp:16,compliance:.012,deploy:6},inflationRate:3} as const;
export const PHYS={hr:72,sbp:132,dbp:78,spo2:98,act:128,heparinAct:285,riseTau:20,recoveryTau:8,maxST:4,unstableSec:60} as const;
export const FLOW={dissection:.45,timi3:.8,timi2:.25,timi1:.02} as const;
export const CONTRAST={selective:8,aortic:20} as const;
