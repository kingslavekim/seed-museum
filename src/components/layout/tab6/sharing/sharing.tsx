import {
    Box,
    Breadcrumbs,
    Divider,
    Link, Paper,
    Stack,
    Typography, Pagination, Tabs, Tab,
} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

const imageList1 = ['20250322_113730_압축.jpg', '20250322_113740_압축.jpg', '20250322_114032_압축.jpg', '20250322_114043_압축.jpg', '20250322_114102_압축.jpg', '20250322_114340_압축.jpg', '20250322_114345_압축.jpg', '20250322_114404_압축.jpg', '20250322_114415_압축.jpg', '20250322_114421_압축.jpg', '20250322_114449 (1)_압축.jpg', '20250322_114453_압축.jpg', '20250322_114457_압축.jpg', '20250322_114502_압축.jpg', '20250322_114530_압축.jpg', '20250322_114616 (1)_압축.jpg', '20250322_114619 (1)_압축.jpg', '20250322_114641_압축.jpg', '20250322_114825_압축.jpg', '20250322_115357_압축.jpg', '20250322_115402_압축.jpg', '20250322_115408_압축.jpg', '20250322_115633_압축.jpg', '20250322_115636_압축.jpg', '20250322_115640_압축.jpg', '20250322_115646_압축.jpg', '20250322_115700_압축.jpg', '20250322_115705_압축.jpg', '20250322_120754 (1)_압축.jpg', '20250322_120800_압축.jpg', '20250322_120802_압축.jpg', '20250322_120816_압축.jpg', '20250322_120825_압축.jpg', '20250322_121031_압축.jpg', '20250322_121712_압축.jpg', '20250322_121715 (1)_압축.jpg', '20250322_121723 (1)_압축.jpg', '20250322_121725 (1)_압축.jpg', '20250322_121738_압축.jpg', '20250322_121744_압축.jpg', '20250322_121746_압축.jpg', '20250322_122152_압축.jpg', '20250322_122732_압축.jpg', '20250322_122740_압축.jpg', '20250322_122743_압축.jpg', '20250322_122747_압축.jpg', '20250322_133701_압축.jpg', '20250322_133713_압축.jpg', '20250322_133723 (1)_압축.jpg'];
const imageList2 = ['240316-001_압축.jpg', '240316-002_압축.jpg', '240316-003_압축.jpg', '240316-004_압축.jpg', '240316-005_압축.jpg', '240316-006_압축.jpg', '240316-007_압축.jpg', '240316-008_압축.jpg', '240316-009_압축.jpg', '240316-010_압축.jpg', '240316-011_압축.jpg', '240316-012_압축.jpg', '240316-013_압축.jpg', '240316-014_압축.jpg', '240316-015_압축.jpg', '240316-016_압축.jpg', '240316-017_압축.jpg', '240316-018_압축.jpg', '240316-019_압축.jpg', '240316-020_압축.jpg', '240316-021_압축.jpg', '240316-022_압축.jpg', '240316-023_압축.jpg', '240316-024_압축.jpg', '240316-025_압축.jpg', '240316-026_압축.jpg', '240316-027_압축.jpg', '240316-028_압축.jpg', '240316-029_압축.jpg', '240316-030_압축.jpg', '240316-031_압축.jpg', '240316-032_압축.jpg', '240316-033_압축.jpg', '240316-034_압축.jpg', '240316-035_압축.jpg', '240316-036_압축.jpg', '240316-037_압축.jpg', '240316-038_압축.jpg', '240316-039_압축.jpg', '240316-040_압축.jpg', '240316-041_압축.jpg', '240316-042_압축.jpg', '240316-043_압축.jpg', '240316-044_압축.jpg', '240316-045_압축.jpg', '240316-046_압축.jpg', '240316-047_압축.jpg', '240316-048_압축.jpg', '240316-049_압축.jpg', '240316-050_압축.jpg', '240316-051_압축.jpg', '240316-052_압축.jpg', '240316-053_압축.jpg', '240316-054_압축.jpg', '240316-055_압축.jpg', '240316-056_압축.jpg', '240316-057_압축.jpg', '240316-058_압축.jpg', '240316-059_압축.jpg', '240316-060_압축.jpg', '240316-061_압축.jpg', '240316-062_압축.jpg', '240316-063_압축.jpg', '240316-064_압축.jpg', '240316-065_압축.jpg', '240316-066_압축.jpg', '240316-067_압축.jpg', '240316-068_압축.jpg', '240316-069_압축.jpg', '240316-070_압축.jpg', '240316-071_압축.jpg', '240316-072_압축.jpg', '240316-073_압축.jpg', '240316-074_압축.jpg', '240316-075_압축.jpg', '240316-076_압축.jpg', '240316-077_압축.jpg', '240316-078_압축.jpg', '240316-079_압축.jpg', '240316-080_압축.jpg', '240316-081_압축.jpg', '240316-082_압축.jpg', '240316-083_압축.jpg', '240316-084_압축.jpg', '240316-085_압축.jpg', '240316-086_압축.jpg', '240316-087_압축.jpg', '240316-088_압축.jpg'];
const imageList3 = ['20220308_175817_압축.jpg', '20220319_095409_압축.jpg', '20220319_095418_압축.jpg', '20220319_095445_압축.jpg', '20220319_095454_압축.jpg', '20220319_100744_압축.jpg', '20220319_100801_압축.jpg', '20220319_101738_압축.jpg', '20220319_101750_압축.jpg', '20220319_101822_압축.jpg', '20220319_101837_압축.jpg', '20220319_101851_압축.jpg', '20220319_101928_압축.jpg', '20220319_102005_압축.jpg', '20220319_102122_압축.jpg', '20220319_102334_압축.jpg', '20220319_102345_압축.jpg', '20220319_102512_압축.jpg', '20220319_102533_압축.jpg', '20220319_102621_압축.jpg', '20220319_102714_압축.jpg', '20220319_102805_압축.jpg', '20220319_102825_압축.jpg', '20220319_102852_압축.jpg', '20220319_103028_압축.jpg', '20220319_103138_압축.jpg', '20220319_103253_압축.jpg', '20220319_103424_압축.jpg', '20220319_103604_압축.jpg', '20220319_103653_압축.jpg', '20220319_104125_압축.jpg', '20220319_104216_압축.jpg', '20220319_104303_압축.jpg', '20220319_104356_압축.jpg', '20220319_104411_압축.jpg', '20220319_104509_압축.jpg', '20220319_104542_압축.jpg', '20220319_104600_압축.jpg', '20220319_104638_압축.jpg', '20220319_104702_압축.jpg', '20220319_104711_압축.jpg', '20220319_104714_압축.jpg', '20220319_104737_압축.jpg', '20220319_104836_압축.jpg', '20220319_104851_압축.jpg', '20220319_112011_압축.jpg', '20220319_112031_압축.jpg', '20220319_112047_압축.jpg', '20220319_112054_압축.jpg', '20220319_112102_압축.jpg', '20220319_112125_압축.jpg', '20220319_112219_압축.jpg', '20220319_112222_압축.jpg', '20220319_112244_압축.jpg', '20220319_112250_압축.jpg', '20220319_112301_압축.jpg', '20220319_112305_압축.jpg', '20220319_112310_압축.jpg', '20220319_112322_압축.jpg', '20220319_112326_압축.jpg', '20220319_112335_압축.jpg', '20220319_112339_압축.jpg', '20220319_112348_압축.jpg', '20220319_112405_압축.jpg', '20220319_112411_압축.jpg', '20220319_112425_압축.jpg', '20220319_112427_압축.jpg', '20220319_112437_압축.jpg', '20220319_112447_압축.jpg', '20220319_112452_압축.jpg', '20220319_112607_압축.jpg', '20220319_112616_압축.jpg', '20220319_112655_압축.jpg', '20220319_113040_압축.jpg', '20220319_113326_압축.jpg', '20220319_113330_압축.jpg', '20220319_114404_압축.jpg', 'Resized_20220319_111822_압축.jpg'];
const imageList4 = ['1616287965017_압축.jpg', '1616287965486_압축.jpg', '1616287980643_압축.jpg', '1616287983908_압축.jpg', '1616287987316_압축.jpg', '1616287990277_압축.jpg', '1616287995941_압축.jpg', '1616287999179_압축.jpg', '1616288002576_압축.jpg', '1616288005703_압축.jpg', '1616288008858_압축.jpg', '1616288017457_압축.jpg', '1616288020797_압축.jpg', '1616288026551_압축.jpg', '1616288030795_압축.jpg', '1616288033782_압축.jpg', '1616288037368_압축.jpg', '1616288051394_압축.jpg', '1616288054346_압축.jpg', '1616288057723_압축.jpg', '20210320_094434_압축.jpg', '20210320_094453_압축.jpg', '20210320_094510_압축.jpg', '20210320_094554_압축.jpg', '20210320_094601_압축.jpg', '20210320_094604_압축.jpg', '20210320_094648_압축.jpg', '20210320_094659_압축.jpg', '20210320_095015_압축.jpg', '20210320_095025_압축.jpg', '20210320_095310_압축.jpg', '20210320_095401_압축.jpg', '20210320_095941_압축.jpg', '20210320_101154_압축.jpg', '20210320_101238_압축.jpg', '20210320_101405_압축.jpg', '20210320_101415_압축.jpg', '20210320_101624_압축.jpg', '20210320_101628_압축.jpg', '20210320_101749_압축.jpg', '20210320_101943_압축.jpg', '20210320_102007_압축.jpg', '20210320_102013_압축.jpg', '20210320_102025_압축.jpg', '20210320_102031_압축.jpg', '20210320_102034_압축.jpg', '20210320_102059_압축.jpg', '20210320_102105_압축.jpg', '20210320_102109_압축.jpg', '20210320_102120_압축.jpg', '20210320_102152_압축.jpg', '20210320_102156_압축.jpg', '20210320_102205_압축.jpg', '20210320_102222_압축.jpg', '20210320_102225_압축.jpg', '20210320_102236_압축.jpg', '20210320_102255_압축.jpg', '20210320_102339_압축.jpg', '20210320_102348_압축.jpg', '20210320_102533_압축.jpg', '20210320_102537_압축.jpg', '20210320_102701_압축.jpg', '20210320_102709_압축.jpg', '20210320_102748_압축.jpg', '20210320_102757_압축.jpg', '20210320_102801_압축.jpg', '20210320_102823_압축.jpg', '20210320_102830_압축.jpg', '20210320_102832_압축.jpg', '20210320_102844_압축.jpg', '20210320_102846_압축.jpg', '20210320_102851_압축.jpg', '20210320_102857_압축.jpg', '20210320_102859_압축.jpg', '20210320_103344_압축.jpg', '20210320_103349_압축.jpg', '20210320_103406_압축.jpg', '20210320_103422_압축.jpg', '20210320_103427_압축.jpg', '20210320_103500_압축.jpg', '20210320_103509_압축.jpg', '20210320_103546_압축.jpg', '20210320_103548_압축.jpg', '20210320_103553_압축.jpg', '20210320_103559_압축.jpg', '20210320_103630_압축.jpg', '20210320_103637_압축.jpg', '20210320_103706_압축.jpg', '20210320_103710_압축.jpg', '20210320_104122_압축.jpg', '20210320_104129_압축.jpg', '20210320_104138_압축.jpg', '20210320_104144_압축.jpg', '20210320_104226_압축.jpg', '20210320_105051_압축.jpg', '20210320_110348_압축.jpg', '20210320_110354_압축.jpg', '20210320_110437_압축.jpg', '20210320_110448_압축.jpg', '20210320_110454_압축.jpg', '20210320_110455_압축.jpg', '20210320_110909_압축.jpg', '20210320_110919_압축.jpg', '20210320_110925_압축.jpg', '20210320_110929_압축.jpg', '20210320_111432_압축.jpg', '20210320_111433_압축.jpg', '20210320_111437_압축.jpg', '20210320_111438_압축.jpg', '20210320_111525_압축.jpg', '20210320_111533_압축.jpg', '20210320_111537_압축.jpg', '20210320_111547_압축.jpg', '20210320_111551_압축.jpg', '20210320_111552_압축.jpg', '20210320_111557_압축.jpg', '20210320_111558_압축.jpg', '20210320_111628_압축.jpg', '20210320_111633_압축.jpg', '20210320_111643_압축.jpg', '20210320_111648_압축.jpg', '20210320_111651_압축.jpg', '20210320_111711_압축.jpg', '20210320_111716_압축.jpg', '20210320_111717_압축.jpg', '20210320_111721_압축.jpg', '20210320_111724_압축.jpg', '20210320_111749_압축.jpg', '20210320_111802_압축.jpg', '20210320_111807_압축.jpg', '20210320_111816_압축.jpg', '20210320_111820_압축.jpg', '20210320_111825_압축.jpg', '20210320_111910_압축.jpg', '20210320_111933_압축.jpg', '20210320_111938_압축.jpg', '20210320_112007_압축.jpg', '20210320_112013_압축.jpg', '20210320_112018_압축.jpg', '20210320_112023_압축.jpg', '20210320_112029_압축.jpg', '20210320_112129_압축.jpg', '20210320_112151_압축.jpg', '20210320_112153_압축.jpg', '20210320_112154_압축.jpg', '20210320_112204_압축.jpg', '20210320_112207_압축.jpg', '20210320_112208_압축.jpg', '20210320_112847_압축.jpg', '20210320_112850_압축.jpg', '20210320_112856_압축.jpg', '20210320_112913_압축.jpg', '20210320_112931_압축.jpg', '20210320_112936_압축.jpg', '20210320_112950_압축.jpg', '20210320_112953_압축.jpg', '20210320_120156_압축.jpg', '20210320_120209_압축.jpg', '20210320_120210_압축.jpg', '20210320_120212_압축.jpg', '20210320_145746_압축.jpg', '20210320_145945_압축.jpg', '20210403_094701_압축.jpg', '20210403_102535_압축.jpg', '20210403_105000_압축.jpg', '20210403_105141_압축.jpg', '20210403_105148_압축.jpg', '20210403_105250_압축.jpg', '20210403_105255_압축.jpg', '20210403_105301_압축.jpg', '20210403_105320_압축.jpg', '20210403_110227_압축.jpg', '20210403_130440_압축.jpg', '20210403_130600_압축.jpg', '20210403_130627_압축.jpg', '20210403_130641_압축.jpg', '20210403_130842_압축.jpg', '20210403_130951_압축.jpg', '20210403_131015_압축.jpg', '20210403_131117_압축.jpg', '20210403_131132_압축.jpg', '20210403_131157_압축.jpg', '20210409_121657_압축.jpg', '20210420_082249_압축.jpg', 'FB_IMG_1616279916536_압축.jpg'];
const imageList5 = ['20190330_101329_압축.jpg', '20190330_101330_압축.jpg', '20190330_101630_압축.jpg', '20190330_102945_압축.jpg', '20190330_103003_압축.jpg', '20190330_103011_압축.jpg', '20190330_103518_압축.jpg', '20190330_103556_압축.jpg', '20190330_104133_압축.jpg', '20190330_104545_압축.jpg', '20190330_104633_압축.jpg', '20190330_104702_압축.jpg', '20190330_104817_압축.jpg', '20190330_104909_압축.jpg', '20190330_104945_압축.jpg', '20190330_105045_압축.jpg', '20190330_105445_압축.jpg', '20190330_105603_압축.jpg', '20190330_105604_압축.jpg', '20190330_105644_압축.jpg', '20190330_105753_압축.jpg', '20190330_110412_압축.jpg', '20190330_111645_압축.jpg', '20190330_113232_압축.jpg', '20190330_113242_압축.jpg', '20190330_113316_압축.jpg', '20190330_113317_압축.jpg', '20190330_113323_압축.jpg', '20190330_113330_압축.jpg', '20190330_113450_압축.jpg', '20190330_113622_압축.jpg', '20190330_113626_압축.jpg', '20190330_113634_압축.jpg', '20190330_113815_압축.jpg', 'DSCF4705_압축.jpg', 'DSCF4706_압축.jpg', 'DSCF4708_압축.jpg', 'DSCF4709_압축.jpg', 'DSCF4711_압축.jpg', 'DSCF4713_압축.jpg', 'DSCF4715_압축.jpg', 'DSCF4716_압축.jpg', 'DSCF4717_압축.jpg', 'DSCF4718_압축.jpg', 'DSCF4719_압축.jpg', 'DSCF4720_압축.jpg', 'DSCF4722_압축.jpg', 'DSCF4723_압축.jpg', 'DSCF4724_압축.jpg', 'DSCF4726_압축.jpg', 'DSCF4727_압축.jpg', 'DSCF4728_압축.jpg', 'DSCF4730_압축.jpg', 'DSCF4732_압축.jpg', 'DSCF4733_압축.jpg', 'DSCF4734_압축.jpg', 'DSCF4736_압축.jpg', 'DSCF4737_압축.jpg', 'DSCF4739_압축.jpg', 'DSCF4740_압축.jpg', 'DSCF4742_압축.jpg', 'DSCF4744_압축.jpg', 'DSCF4745_압축.jpg', 'DSCF4746_압축.jpg', 'DSCF4747_압축.jpg', 'DSCF4748_압축.jpg', 'DSCF4749_압축.jpg', 'DSCF4750_압축.jpg', 'DSCF4751_압축.jpg', 'DSCF4752_압축.jpg', 'DSCF4754_압축.jpg', 'DSCF4756_압축.jpg', 'DSCF4757_압축.jpg', 'DSCF4759_압축.jpg', 'DSCF4760_압축.jpg', 'DSCF4761_압축.jpg', 'DSCF4763_압축.jpg', 'DSCF4764_압축.jpg', 'DSCF4765_압축.jpg', 'DSCF4766_압축.jpg', 'DSCF4767_압축.jpg', 'DSCF4769_압축.jpg', 'DSCF4770_압축.jpg', 'DSCF4771_압축.jpg', 'DSCF4772_압축.jpg', 'DSCF4774_압축.jpg', 'DSCF4775_압축.jpg', 'DSCF4776_압축.jpg', 'DSCF4778_압축.jpg', 'DSCF4779_압축.jpg', 'DSCF4780_압축.jpg', 'DSCF4782_압축.jpg', 'DSCF4783_압축.jpg', 'DSCF4784_압축.jpg', 'DSCF4785_압축.jpg', 'DSCF4786_압축.jpg', 'DSCF4787_압축.jpg', 'DSCF4788_압축.jpg', 'DSCF4790_압축.jpg', 'DSCF4791_압축.jpg', 'DSCF4792_압축.jpg', 'DSCF4793_압축.jpg', 'DSCF4794_압축.jpg', 'DSCF4795_압축.jpg', 'DSCF4797_압축.jpg', 'DSCF4798_압축.jpg', 'DSCF4799_압축.jpg', 'DSCF4801_압축.jpg', 'DSCF4804_압축.jpg', 'DSCF4806_압축.jpg', 'DSCF4808_압축.jpg', 'DSCF4809_압축.jpg', 'DSCF4810_압축.jpg', 'DSCF4811_압축.jpg', 'DSCF4812_압축.jpg', 'DSCF4814_압축.jpg', 'DSCF4815_압축.jpg', 'DSCF4816_압축.jpg', 'DSCF4817_압축.jpg', 'DSCF4819_압축.jpg', 'DSCF4821_압축.jpg', 'DSCF4822_압축.jpg', 'DSCF4823_압축.jpg', 'DSCF4824_압축.jpg', 'DSCF4827_압축.jpg', 'DSCF4828_압축.jpg', 'DSCF4831_압축.jpg', 'DSCF4833_압축.jpg', 'DSCF4836_압축.jpg', 'DSCF4837_압축.jpg', 'DSCF4838_압축.jpg', 'DSCF4839_압축.jpg', 'DSCF4840_압축.jpg', 'DSCF4841_압축.jpg', 'DSCF4844_압축.jpg', 'DSCF4846_압축.jpg', 'DSCF4848_압축.jpg', 'DSCF4849_압축.jpg', 'DSCF4850_압축.jpg', 'DSCF4851_압축.jpg', 'DSCF4852_압축.jpg', 'DSCF4853_압축.jpg', 'DSCF4854_압축.jpg', 'DSCF4855_압축.jpg', 'DSCF4856_압축.jpg', 'DSCF4858_압축.jpg', 'DSCF4859_압축.jpg', 'DSCF4862_압축.jpg', 'DSCF4864_압축.jpg', 'DSCF4865_압축.jpg', 'DSCF4866_압축.jpg', 'DSCF4867_압축.jpg', 'DSCF4868_압축.jpg', 'DSCF4869_압축.jpg', 'DSCF4870_압축.jpg', 'DSCF4871_압축.jpg', 'DSCF4872_압축.jpg', 'DSCF4873_압축.jpg', 'DSCF4874_압축.jpg', 'DSCF4877_압축.jpg', 'DSCF4878_압축.jpg', 'DSCF4881_압축.jpg', 'DSCF4882_압축.jpg', 'DSCF4885_압축.jpg', 'DSCF4888_압축.jpg', 'DSCF4889_압축.jpg', 'DSCF4891_압축.jpg', 'DSCF4892_압축.jpg', 'DSCF4893_압축.jpg', 'DSCF4895_압축.jpg', 'DSCF4896_압축.jpg', 'DSCF4897_압축.jpg', 'DSCF4898_압축.jpg', 'DSCF4899_압축.jpg', 'DSCF4901_압축.jpg', 'DSCF4902_압축.jpg', 'DSCF4903_압축.jpg', 'DSCF4904_압축.jpg', 'DSCF4905_압축.jpg', 'IMG_3303_압축.jpg', 'IMG_3305_압축.jpg', 'IMG_3306_압축.jpg', 'IMG_3307_압축.jpg', 'IMG_3313_압축.jpg', 'IMG_3316_압축.jpg', 'IMG_3318_압축.jpg', 'IMG_3320_압축.jpg', 'IMG_3321_압축.jpg', 'IMG_3326_압축.jpg', 'IMG_3327_압축.jpg', 'IMG_3328_압축.jpg', 'IMG_3329_압축.jpg', 'IMG_3330_압축.jpg', 'IMG_3332_압축.jpg', 'IMG_3333_압축.jpg', 'IMG_3334_압축.jpg', 'IMG_3337_압축.jpg', 'IMG_3339_압축.jpg', 'IMG_3341_압축.jpg', 'IMG_3342_압축.jpg', 'IMG_3345_압축.jpg', 'IMG_3346_압축.jpg', 'IMG_3354_압축.jpg'];
const imageList6 = ['2018-03-31 18.16.40_압축.jpg', '20180331_101523_압축.jpg', '20180331_101536_압축.jpg', '20180331_101631_압축.jpg', '20180331_101908_압축.jpg', '20180331_102022_압축.jpg', '20180331_102040_압축.jpg', '20180331_102354_압축.jpg', '20180331_102550_압축.jpg', '20180331_102556_압축.jpg', '20180331_102557_압축.jpg', '20180331_103217_압축.jpg', '20180331_103305_압축.jpg', '20180331_103316_압축.jpg', '20180331_104329_압축.jpg', '20180331_105126_압축.jpg', '20180331_105127_압축.jpg', '20180331_105555_압축.jpg', '20180331_105558_압축.jpg', '20180331_105608_압축.jpg', '20180331_105733_압축.jpg', '20180331_105743_압축.jpg', '20180331_105817_압축.jpg', '20180331_105821_압축.jpg', '20180331_105826_압축.jpg', '20180331_105831_압축.jpg', '20180331_105956_압축.jpg', '20180331_110004_압축.jpg', '20180331_110015_압축.jpg', '20180331_110022_압축.jpg', '20180331_110026_압축.jpg', '20180331_110033_압축.jpg', '20180331_110201_압축.jpg', '20180331_110205_압축.jpg', '20180331_110209_압축.jpg', '20180331_110216_압축.jpg', '20180331_110221_압축.jpg', '20180331_110233_압축.jpg', '20180331_110252_001_압축.jpg', '20180331_110253_압축.jpg', '20180331_110316_압축.jpg', '20180331_110422_압축.jpg', '20180331_110428_압축.jpg', '20180331_110500_압축.jpg', '20180331_110810_압축.jpg', '20180331_110858_압축.jpg', '20180331_110903_압축.jpg', '20180331_111114_압축.jpg', '20180331_111122_압축.jpg', '20180331_111132_압축.jpg', '20180331_111141_압축.jpg', '20180331_111210_압축.jpg', '20180331_111244_압축.jpg', '20180331_111334_압축.jpg', '20180331_111348_압축.jpg', '20180331_113015_압축.jpg', '20180331_113021_압축.jpg', '20180331_113101(0)_압축.jpg', '20180331_113109_압축.jpg', '20180331_113307_압축.jpg', '20180331_113319_압축.jpg', '20180331_113331_압축.jpg', '20180331_113343_압축.jpg', '20180331_113346_압축.jpg', '20180331_113830_압축.jpg', '20180331_113832_압축.jpg'];
const imageList7 = ['1492242501112_압축.jpg', '1492242508939_압축.jpg', '1492242526552_압축.jpg', '1492242542643_압축.jpg', '1492242547629_압축.jpg', '1492242556663_압축.jpg', '1492242562567_압축.jpg', '1492242567685_압축.jpg', '1492242572757_압축.jpg', '1492242590955_압축.jpg', '1492242598143_압축.jpg', '1492242605372_압축.jpg', '1492242613482_압축.jpg', '1492242618989_압축.jpg', '1492242623954_압축.jpg', '1492242628065_압축.jpg', '1492242633303_압축.jpg', '1492308554674_압축.jpg', '1492308560921_압축.jpg', '1492308564711_압축.jpg', '1492308567486_압축.jpg', '1492308574356_압축.jpg', '2017-04-15 16.55.10_압축.jpg', '2017-04-15 16.58.42_압축.jpg', '20170411_122720_압축.jpg', '20170415_100950_압축.jpg', '20170415_103041_압축.jpg', '20170415_103615_압축.jpg', '20170415_103621_압축.jpg', '20170415_103631_압축.jpg', '20170415_104353_압축.jpg', '20170415_104406_압축.jpg', '20170415_105106_압축.jpg', '20170415_105118_압축.jpg', '20170415_105724_001_압축.jpg', '20170415_105726_압축.jpg', '20170415_110939_압축.jpg', '20170415_111537_압축.jpg', '20170415_111547_압축.jpg', '20170415_111603_압축.jpg', '20170415_111613_압축.jpg', '20170415_111644_압축.jpg', '20170415_111648_압축.jpg', '20170415_111659_001_압축.jpg', '20170415_111725_압축.jpg', '20170415_111729_압축.jpg', '20170415_111751_압축.jpg', '20170415_111800_압축.jpg', '20170415_111805_압축.jpg', '20170415_111817_압축.jpg', '20170415_111838_압축.jpg', '20170415_111842_압축.jpg', '20170415_111849_압축.jpg', '20170415_111858_압축.jpg', '20170415_111904_압축.jpg', '20170415_111911_압축.jpg', '20170415_111916_001_압축.jpg', '20170415_111918_압축.jpg', '20170415_112045_압축.jpg', '20170415_112055_압축.jpg', '20170415_112227_압축.jpg', '20170415_112311_압축.jpg', '20170415_112312_압축.jpg', '20170415_112326_압축.jpg', '20170415_112327_압축.jpg', '20170415_112519_압축.jpg', '20170415_112525_001_압축.jpg', '20170415_112526_압축.jpg', '20170415_112635_압축.jpg', '20170415_112717_압축.jpg', '20170415_112718(0)_압축.jpg', '20170415_112718_압축.jpg', '20170415_112734_압축.jpg', '20170415_112846(0)_압축.jpg', '20170415_112846_압축.jpg', '20170415_112847_압축.jpg', '20170415_113116_압축.jpg', '20170415_113117_압축.jpg', '20170415_113124_압축.jpg', '20170415_113126_압축.jpg', '20170415_113130_압축.jpg', '20170415_113302_압축.jpg', '20170415_113322_압축.jpg', '20170415_124717_압축.jpg', '20170415_124741_압축.jpg', '20170415_125949(0)_압축.jpg', '20170415_130111_압축.jpg', '20170513_111209_압축.jpg', '20170513_124445_압축.jpg', '20171014_123334_압축.jpg', '20171210_174217_압축.jpg', '20171210_183738_압축.jpg', 'FB_IMG_1492292023924_압축.jpg', 'FB_IMG_1492292035181_압축.jpg', 'FB_IMG_1492292045459_압축.jpg', 'FB_IMG_1492292054277_압축.jpg', 'FB_IMG_1492292068034_압축.jpg', 'FB_IMG_1492292079916_압축.jpg', 'FB_IMG_1492292094246_압축.jpg', 'FB_IMG_1492292111625_압축.jpg', 'FB_IMG_1492292124640_압축.jpg', 'FB_IMG_1492292134047_압축.jpg', 'FB_IMG_1492292144308_압축.jpg', 'FB_IMG_1492292156175_압축.jpg', 'FB_IMG_1492292171339_압축.jpg'];

const Sharing = () => {
    const navigate = useNavigate();
    const [mainTab, setMainTab] = useState(0); // 상위 탭 (제1관, 제2관 등) 관리
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handleMainTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setMainTab(newValue);
        setCurrentPage(1);
        window.scrollTo(0, 0);
    };

    const handlePaginationChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };


    const totalPages1 = Math.ceil(imageList1.length / itemsPerPage);
    const totalPages2 = Math.ceil(imageList2.length / itemsPerPage);
    const totalPages3 = Math.ceil(imageList3.length / itemsPerPage);
    const totalPages4 = Math.ceil(imageList4.length / itemsPerPage);
    const totalPages5 = Math.ceil(imageList5.length / itemsPerPage);
    const totalPages6 = Math.ceil(imageList6.length / itemsPerPage);
    const totalPages7 = Math.ceil(imageList7.length / itemsPerPage);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const Exhibit1 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)',
                        },
                        gap: 2
                    }}
                >
                    {imageList1.slice(startIndex, endIndex).map((src, index) => {
                        return (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: 260,
                                }}
                            >
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: 260,
                                    }}
                                >
                                    {/* 이미지 */}
                                    <a
                                        href={`/event/씨앗나눔/2025/${src}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <img
                                            src={`/event/씨앗나눔/2025/${src}`}
                                            alt={src}
                                            loading="lazy"
                                            style={{
                                                width: 260,
                                                height: 260,
                                                objectFit: 'cover',
                                                borderRadius: 8,
                                            }}
                                        />
                                    </a>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>

                {imageList1.length === 0 && (
                    <Box sx={{height: 600}}/>
                )}
            </Box>

            <Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <Pagination
                        count={totalPages1}
                        page={currentPage}
                        onChange={handlePaginationChange}
                        shape="rounded"
                        color="primary"
                    />
                </Box>
            </Box>
        </Paper>
    );

    const Exhibit2 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)',
                        },
                        gap: 2
                    }}
                >
                    {imageList2.slice(startIndex, endIndex).map((src, index) => {
                        return (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: 280,
                                }}
                            >
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: 280,
                                    }}
                                >
                                    {/* 이미지 */}
                                    <a
                                        href={`/event/씨앗나눔/2024/${src}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <img
                                            src={`/event/씨앗나눔/2024/${src}`}
                                            alt={src}
                                            loading="lazy"
                                            style={{
                                                width: 280,
                                                height: 280,
                                                objectFit: 'cover',
                                                borderRadius: 8,
                                            }}
                                        />
                                    </a>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>

                {imageList2.length === 0 && (
                    <Box sx={{height: 600}}/>
                )}
            </Box>

            <Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <Pagination
                        count={totalPages2}
                        page={currentPage}
                        onChange={handlePaginationChange}
                        shape="rounded"
                        color="primary"
                    />
                </Box>
            </Box>
        </Paper>
    );

    const Exhibit3 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)',
                        },
                        gap: 2
                    }}
                >
                    {imageList3.slice(startIndex, endIndex).map((src, index) => {
                        return (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: 280,
                                }}
                            >
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: 280,
                                    }}
                                >
                                    {/* 이미지 */}
                                    <a
                                        href={`/event/씨앗나눔/2022/${src}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <img
                                            src={`/event/씨앗나눔/2022/${src}`}
                                            alt={src}
                                            loading="lazy"
                                            style={{
                                                width: 280,
                                                height: 280,
                                                objectFit: 'cover',
                                                borderRadius: 8,
                                            }}
                                        />
                                    </a>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>

                {imageList3.length === 0 && (
                    <Box sx={{height: 600}}/>
                )}
            </Box>

            <Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <Pagination
                        count={totalPages3}
                        page={currentPage}
                        onChange={handlePaginationChange}
                        shape="rounded"
                        color="primary"
                    />
                </Box>
            </Box>
        </Paper>
    );

    const Exhibit4 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)',
                        },
                        gap: 2
                    }}
                >
                    {imageList4.slice(startIndex, endIndex).map((src, index) => {
                        return (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: 280,
                                }}
                            >
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: 280,
                                    }}
                                >
                                    {/* 이미지 */}
                                    <a
                                        href={`/event/씨앗나눔/2021/${src}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <img
                                            src={`/event/씨앗나눔/2021/${src}`}
                                            alt={src}
                                            loading="lazy"
                                            style={{
                                                width: 280,
                                                height: 280,
                                                objectFit: 'cover',
                                                borderRadius: 8,
                                            }}
                                        />
                                    </a>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>

                {imageList4.length === 0 && (
                    <Box sx={{height: 600}}/>
                )}
            </Box>

            <Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <Pagination
                        count={totalPages4}
                        page={currentPage}
                        onChange={handlePaginationChange}
                        shape="rounded"
                        color="primary"
                    />
                </Box>
            </Box>
        </Paper>
    );

    const Exhibit5 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)',
                        },
                        gap: 2
                    }}
                >
                    {imageList5.slice(startIndex, endIndex).map((src, index) => {
                        return (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: 280,
                                }}
                            >
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: 280,
                                    }}
                                >
                                    {/* 이미지 */}
                                    <a
                                        href={`/event/씨앗나눔/2019/${src}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <img
                                            src={`/event/씨앗나눔/2019/${src}`}
                                            alt={src}
                                            loading="lazy"
                                            style={{
                                                width: 280,
                                                height: 280,
                                                objectFit: 'cover',
                                                borderRadius: 8,
                                            }}
                                        />
                                    </a>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>

                {imageList5.length === 0 && (
                    <Box sx={{height: 600}}/>
                )}
            </Box>

            <Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <Pagination
                        count={totalPages5}
                        page={currentPage}
                        onChange={handlePaginationChange}
                        shape="rounded"
                        color="primary"
                    />
                </Box>
            </Box>
        </Paper>
    );

    const Exhibit6 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)',
                        },
                        gap: 2
                    }}
                >
                    {imageList6.slice(startIndex, endIndex).map((src, index) => {
                        return (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: 280,
                                }}
                            >
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: 280,
                                    }}
                                >
                                    {/* 이미지 */}
                                    <a
                                        href={`/event/씨앗나눔/2018/${src}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <img
                                            src={`/event/씨앗나눔/2018/${src}`}
                                            alt={src}
                                            loading="lazy"
                                            style={{
                                                width: 280,
                                                height: 280,
                                                objectFit: 'cover',
                                                borderRadius: 8,
                                            }}
                                        />
                                    </a>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>

                {imageList6.length === 0 && (
                    <Box sx={{height: 600}}/>
                )}
            </Box>

            <Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <Pagination
                        count={totalPages6}
                        page={currentPage}
                        onChange={handlePaginationChange}
                        shape="rounded"
                        color="primary"
                    />
                </Box>
            </Box>
        </Paper>
    );

    const Exhibit7 = () => (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)',
                        },
                        gap: 2
                    }}
                >
                    {imageList7.slice(startIndex, endIndex).map((src, index) => {
                        return (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: 280,
                                }}
                            >
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: 280,
                                    }}
                                >
                                    {/* 이미지 */}
                                    <a
                                        href={`/event/씨앗나눔/2017/${src}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <img
                                            src={`/event/씨앗나눔/2017/${src}`}
                                            alt={src}
                                            loading="lazy"
                                            style={{
                                                width: 280,
                                                height: 280,
                                                objectFit: 'cover',
                                                borderRadius: 8,
                                            }}
                                        />
                                    </a>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>

                {imageList7.length === 0 && (
                    <Box sx={{height: 600}}/>
                )}
            </Box>

            <Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <Pagination
                        count={totalPages7}
                        page={currentPage}
                        onChange={handlePaginationChange}
                        shape="rounded"
                        color="primary"
                    />
                </Box>
            </Box>
        </Paper>
    );

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/seed/" onClick={() => {
            navigate('/seed/');
        }}>
            Home
        </Link>,
        <Typography key="2" sx={{color: 'text.primary'}}>
            문화행사
        </Typography>,
        <Typography key="2" sx={{color: 'text.primary'}}>
            씨앗 나눔
        </Typography>,
    ];

    return (
        <Box sx={{ p: 2 }}>
            <Stack spacing={2}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>

            <Box sx={{ pt: 3 }}>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                >
                    씨앗 나눔
                </Typography>
                <Divider sx={{ mt: 3, borderBottomWidth: 3, bgcolor: 'black' }} />
            </Box>

            <Box sx={{ p: 3 }}>
                {/* 상위 탭 */}
                <Tabs value={mainTab} onChange={handleMainTabChange}>
                    <Tab label="2025년" />
                    <Tab label="2024년" />
                    <Tab label="2022년" />
                    <Tab label="2021년" />
                    <Tab label="2019년" />
                    <Tab label="2018년" />
                    <Tab label="2017년" />
                </Tabs>
                <Box sx={{ mt: 2 }}>
                    {mainTab === 0 && <Exhibit1 />}
                    {mainTab === 1 && <Exhibit2 />}
                    {mainTab === 2 && <Exhibit3 />}
                    {mainTab === 3 && <Exhibit4 />}
                    {mainTab === 4 && <Exhibit5 />}
                    {mainTab === 5 && <Exhibit6 />}
                    {mainTab === 6 && <Exhibit7 />}
                </Box>
            </Box>
        </Box>
    );
};

export default Sharing;