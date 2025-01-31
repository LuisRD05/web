function buscar() {
    const busqueda = document.getElementById('buscar').value.toLowerCase();

    
    const paginas = {
        "monkey black": "./Monkey Black/Monkey black.html",
        "cirujano nocturno": "./Cirujano Nocturno/Cirujano Nocturno.html",
        "martin lora": "./Martin Lora/Martin Lora.html",
        "rochy rd": "./Rochy RD/Rochy.html",
        "shelow shaq": "./Shelow Shaq/Shelow Shaq.html",
        "n fasis": "./N-Fasis/N-fasis.html",
        "braulio fogon":"./braulio fogon/braulio fogon.html",
        "treintisiete":"./Treintisiete/Treintisiete.html",
        "bad bunny":"./Bad Bunny/Bad Bunny.html",
        "arcangel":"./Arcangel/Arcangel.html",
        "jon z":"./Jon Z/Jon Z.html",
        "lil naay":"./Lil Naay/Lil Naay.html",
        "yilin la mas viral":"./Yailin/Yailin.html",

         // De aqui hacia debajo agregare las musicas

        "martin lora ft rd javi  1k Bendiciones": "./Martin Lora/1k Bendiciones.html",
        "martin lora y rd javi  1k Bendiciones": "./Martin Lora/1k Bendiciones.html",
        "1k de bendiciones": "./Martin Lora/1k Bendiciones.html",

        "cirujano nocturno ft el fother  6 Kilos":"./Cirujano Nocturno/6 kilos.html",
        "cirujano nocturno y el fother  6 Kilos":"./Cirujano Nocturno/6 kilos.html",
        "6 kilos":"./Cirujano Nocturno/6 kilos.html",

        "lapiz conciente ft cirujano nocturno & el fother  atento a mi 10 remix":"./Cirujano Nocturno/A Tento A Mi 10 Remix.html",
        "atento a mi 10 remix":"./Cirujano Nocturno/A Tento A Mi 10 Remix.html",

        "shelow shaq  abuse":"./Shelow Shaq/Abuse.html",
        "abuse":"./Shelow Shaq/Abuse.html",

        "monkey black  algo de mi":"./Monkey Black/algo de mi.html",
        "algo de mi":"./Monkey Black/algo de mi.html",

        "martin lora ft rochi rd  r millones bandido":"./Martin Lora/Bandido.html",
        "martin lora y rochi rd  r millones bandido":"./Martin Lora/Bandido.html",
        "bandido":"./Martin Lora/Bandido.html",
        "r millones bandido":"./Martin Lora/Bandido.html",

        "monkey black  capea el dough personal":"./Monkey Black/capea el dough.html",
        "monkey black  capea el dough":"./Monkey Black/capea el dough.html",

        "rochy rd  que tu anda chuky":"./Rochy RD/Chuky.html",
        "que tu anda chuky":"./Rochy RD/Chuky.html",

        "monkey black copiame":"./Monkey Black/Copiame.html",
        "monkey black copiame":"./Monkey Black/Copiame.html",

        "rochy rd delincuente en sentimiento":"./Rochy RD/Delicuente.html",
        "delincuente en sentimiento":"./Rochy RD/Delicuente.html",

        "martin lora discovery":"./Martin Lora/Discovery.html",
        "discovery":"./Martin Lora/Discovery.html",

        "cirujano nocturno dominicano":"./Cirujano Nocturno/Dominicano.html",
        "dominicano":"./Cirujano Nocturno/Dominicano.html",

        "rochy rd ft myke towers y nicki nicole ella no es tuya remix":"./Rochy RD/Ella no es Tuya.html",
        "rochy rd y myke towers y nicki nicole ella no es tuya remix":"./Rochy RD/Ella no es Tuya.html",
        "ella no es tuya remix":"./Rochy RD/Ella no es Tuya.html",

        "shelow shaq yo si soy hip hop":"./Shelow Shaq/HipHop.html",
        "shelow shaq tiradera para joa":"./Shelow Shaq/HipHop.html",
        "yo si soy hip hop":"./Shelow Shaq/HipHop.html",

        "martin lora yo soy del hood":"./Martin Lora/Hoop.html",
        "yo soy del hood":"./Martin Lora/Hoop.html",

        "rochy rd el integral":"./Rochy RD/Integral.html",
        "el integral":"./Rochy RD/Integral.html",

        "rochy rd ñoño y julito":"./Rochy RD/julito.html",
        "ñoño y julito":"./Rochy RD/julito.html",

        "rochy rd ft el rapper menor":"./Rochy RD/Menor.html",
        "menor":"./Rochy RD/Menor.html",

        "cirujano nocturno mi vida":"./Cirujano Nocturno/Mi Vida.html",
        "mi vida":"./Cirujano Nocturno/Mi Vida.html",

        "shelow shaq ft monkey black & el lapiz conciente palomo en lata":"./Monkey Black/Palomo en Lata.html",
        "palomo en lata":"./Monkey Black/Palomo en Lata.html",

        "shelow shaq paquete - d":"./Shelow Shaq/Paquete-D.html",
        "paquete - d":"./Shelow Shaq/Paquete-D.html",

        "cirujano nocturno para mis 2 hijos":"./Cirujano Nocturno/Para Mi 2 Hijos.html",
        "para mis 2 hijos":"./Cirujano Nocturno/Para Mi 2 Hijos.html",

        "rochy rd soy un infeliz":"./Rochy RD/Soy un Infeliz.html",
        "soy un infeliz":"./Rochy RD/Soy un Infeliz.html",

        "cirujano nocturno y el fother tamo en malo coro":"./Cirujano Nocturno/Tamo En Malo Coro.html",
        "tamo en malo coro":"./Cirujano Nocturno/Tamo En Malo Coro.html",

        "martin lora ft j graff tan cayendo":"./Martin Lora/Tan Cayendo.html",
        "tan cayendo":"./Martin Lora/Tan Cayendo.html",

        "cirujano nocturno ft california y monkey black tan celoso":"./Monkey Black/Tan Celoso.html",
        "cirujano nocturno ft california ft monkey black tan celoso":"./Monkey Black/Tan Celoso.html",
        "cirujano nocturno ft monkey black tan celoso":"./Monkey Black/Tan Celoso.html",
        "cirujano nocturno y monkey black tan celoso":"./Monkey Black/Tan Celoso.html",
        "cirujano nocturno y california y monkey black tan celoso":"./Monkey Black/Tan Celoso.html",
        "tan celoso":"./Monkey Black/Tan Celoso.html",

        "martin lora tarjetero calentón ":"./Martin Lora/Tarjetero Calenton.html",
        "martin lora tarjetero calenton ":"./Martin Lora/Tarjetero Calenton.html",
        "tarjetero calentón ":"./Martin Lora/Tarjetero Calenton.html",
        "tarjetero calenton ":"./Martin Lora/Tarjetero Calenton.html",

        "rochy rd tengo un flow":"./Rochy RD/Tengo un Flow.html",
        "tengo un flow":"./Rochy RD/Tengo un Flow.html",

        "martin lora the hobbie":"./Martin Lora/The Hobbie.html",
        "the hobbie":"./Martin Lora/The Hobbie.html",

        "shelow shaq tu maldita madre":"./Shelow Shaq/Tu Maldita.html",
        "tu maldita madre":"./Shelow Shaq/Tu Maldita.html",

        "monkey black ft mozart la para & villanosam va tene que vola":"./Monkey Black/va tener que volar.html",
        "monkey black va tene que vola":"./Monkey Black/va tener que volar.html",
        "va tene que vola":"./Monkey Black/va tener que volar.html",

        "martin lora viral":"./Martin Lora/Vira.html",
        "viral":"./Martin Lora/Vira.html",

        "n fasis muerte al army":"./N-Fasis/army.html",
        "n fasis tiradera para el army":"./N-Fasis/army.html",
        "tiradera para el army":"./N-Fasis/army.html",
        " muerte a el army":"./N-Fasis/army.html",

        "n fasis ft bulin 47 belico y maquillaje":"./N-Fasis/belico.html",
        "belico y maquillaje":"./N-Fasis/belico.html",

        "n fasis cuidese que usted no viaja":"./N-Fasis/cuidese.html",
        "cuidese que usted no viaja":"./N-Fasis/cuidese.html",

        "el alfa ft n fasis este":"./N-Fasis/este.html",
        "este":"./N-Fasis/este.html",

        "n fasis lento":"./N-Fasis/lento.html",
        "lento":"./N-Fasis/lento.html",

        "n fasis la yerba y el perico":"./N-Fasis/perico.html",
        "la yerba y el perico":"./N-Fasis/perico.html",

        "braulio fogon ft luis brown back to back":"./braulio fogon/back to back.html",
        "back to back":"./braulio fogon/back to back.html",

        "braulio fogon ft ntg cierra la puerta ":"./braulio fogon/cierra la puerta.html",
        "cierra la puerta":"./braulio fogon/cierra la puerta.html",

        "braulio fogon mango piña":"./braulio fogon/piña.html",
        "mango piña":"./braulio fogon/piña.html",

        "braulio fogon sasa o dinero":"./braulio fogon/sasa.html",
        "sasa o dinero":"./braulio fogon/sasa.html",

        "yaisel lm ft braulio fogon mestizo is back y shadow blow":"./braulio fogon/volvio el kurru.html",
        "volvio el kurru":"./braulio fogon/volvio el kurru.html",

        "treintisiete ft ntg ahora soy adicto":"./Treintisiete/adicto.html",
        "ahora soy adicto":"./Treintisiete/adicto.html",
        "treintisiete ft ntg":"./Treintisiete/adicto.html",

        "treintisiete culpable ":"./Treintisiete/culpable.html",
        "culpable ":"./Treintisiete/culpable.html",

        "treintisiete que nunca pare":"./Treintisiete/que nunca pare.html",
        "que nunca pare":"./Treintisiete/que nunca pare.html",

        "treintisiete sacate de mi cabeza ":"./Treintisiete/sacate de mi cabeza.html",
        "sacate de mi cabeza ":"./Treintisiete/sacate de mi cabeza.html",

        "treintisiete ft drumz lt no me quiero senti asi ":"./Treintisiete/sentir asi.html",
        "no me quiero senti asi ":"./Treintisiete/sentir asi.html",

        "treintisiete un sufrido":"./Treintisiete/un sufrido.html",
        "un sufrido":"./Treintisiete/un sufrido.html",

        "bad bunny bendiciones":"./Bad Bunny/bandiciones.html",
        "bendiciones":"./Bad Bunny/bandiciones.html",

        "bad bunny monaco":"./Bad Bunny/monaco.html",
        "monaco":"./Bad Bunny/monaco.html",

        "bad bunny mr october":"./Bad Bunny/mr octuber.html",
        "mr october":"./Bad Bunny/mr octuber.html",

        "bad bunny no me quiero casar":"./Bad Bunny/no me quiero casar.html",
        "no me quiero casar":"./Bad Bunny/no me quiero casar.html",

        "bad bunny un priview":"./Bad Bunny/un priview.html",
        "un priview":"./Bad Bunny/un priview.html",

        "arcangel 3 a 0":"./Arcangel/3 a 0.html",
        "arcangel 3 a 0 tiraera para anuel aa":"./Arcangel/3 a 0.html",
        "3 a 0":"./Arcangel/3 a 0.html",

        "arcangel ft tali flow cabron":"./Arcangel/fow cabron.html",
        "flow cabron":"./Arcangel/fow cabron.html",

        "arcangel ft de la ghetto mas que ayer":"./Arcangel/mas que ayer.html",
        "mas que ayer":"./Arcangel/mas que ayer.html",

        "arcangel esta cancion no tiene nombre":"./Arcangel/no tiene nombre.html",
        "esta cancion no tiene nombre":"./Arcangel/no tiene nombre.html",

        "arcangel ft peso pluma peso completo":"./Arcangel/peso completo.html",
        "peso pluma peso completo":"./Arcangel/peso completo.html",

        "arcangel ft anuel aa rojo":"./Arcangel/rojo.html",
        "rojo":"./Arcangel/rojo.html",

        "jon z dragon jon z":"./Jon Z/Dragon Jon Z.html",
        "dragon jon z":"./Jon Z/Dragon Jon Z.html",

        "jon z ft myke tower jeva nueva":"./Jon Z/jeva neva.html",
        "jeva nueva":"./Jon Z/jeva neva.html",

        "jon z residente challenge":"./Jon Z/residente challenge.html",
        "residente challenge":"./Jon Z/residente challenge.html",

        "jon z si me gano un grammy":"./Jon Z/si me gano un grammy.html",
        "si me gano un grammy":"./Jon Z/si me gano un grammy.html",

        "jon z viajo sin ver":"./Jon Z/viajo sin ver.html",
        "viajo sin ver":"./Jon Z/viajo sin ver.html",

        "lil naay altitaje":"./Lil Naay/Altitaje.html",
        "altitaje":"./Lil Naay/Altitaje.html",

        "lil naay ella":"./Lil Naay/Ella.html",

        "lil naay eso e eso":"./Lil Naay/Eso e eso.html",

        "lil naay ganstar vibes":"./Lil Naay/Ganstar.html",

        "lil naay l nama":"./Lil Naay/L Nama.html",
        "lil naay ft huan62 & dowba montana l nama":"./Lil Naay/L Nama.html",

        "lil naay lo malo malo":"./Lil Naay/Lo malo malo.html",

        "lil naay mami":"./Lil Naay/Mami.html",

        "lil naay pa tripea":"./Lil Naay/Pa tripea.html",

        "lil naay ft shadow blow regalo":"./Lil Naay/regalo.html",
        "lil naay regalo":"./Lil Naay/regalo.html",

        "lil naay tolentino":"./Lil Naay/Tolentino.html",

        "lil naay a 200":"./Lil Naay/A 200.html",
        "a 200":"./Lil Naay/A 200.html",
        "keyviem ft carlos trvp lil naay y little homie a 200":"./Lil Naay/A 200.html",

        "yilin la mas viral bing bong":"./Yailin/bing bong.html",

        "yilin la mas viral quiere chapa":"./Yailin/Chapa.html",

        "yilin la mas viral ft kreizy k dale 2":"./Yailin/Dale 2.html",

        "yilin la mas viral silla":"./Yailin/Silla.html",

        "yilin la mas viral ft la mas doll tela parto remix":"./Yailin/Tela Parto.html",

        "martin lora vvs":"./Martin Lora/VVS.html",

        "glizzy zaza":"./Lil Naay/Glizzy zaza.html",

        "el alfa ft hades66 lil naay  luis brown la patrulla":"./Lil Naay/La patrulla.html",
        "la patrulla":"./Lil Naay/La patrulla.html",

    };

    if (paginas[busqueda]) {
        
        window.location.href = paginas[busqueda];
    } else {
        alert("⚠⚠ No se encontró el resultado de su busqueda. Vuelva ah intentarlo buscando dirrectamente el nombre de la Musica o del Artista...");
       
    }

}



