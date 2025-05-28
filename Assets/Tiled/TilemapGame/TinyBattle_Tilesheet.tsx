<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.10" tiledversion="1.11.2" name="TinyBattle_Tilesheet" tilewidth="16" tileheight="16" tilecount="198" columns="18">
 <image source="kenney_tiny-battle/Tilemap/tilemap_packed.png" width="288" height="176"/>
 <tile id="8">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="9">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="16"/>
   <object id="2" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="10">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="1" width="16" height="15"/>
  </objectgroup>
 </tile>
 <tile id="11">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="15"/>
  </objectgroup>
 </tile>
 <tile id="12">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="23">
  <objectgroup draworder="index" id="2">
   <object id="1" x="1" y="2" width="14" height="13">
    <properties>
     <property name="unity:layer" value="Hazard"/>
    </properties>
   </object>
   <object id="2" x="1" y="2" width="14" height="13">
    <properties>
     <property name="unity:IsTrigger" value="true"/>
     <property name="unity:layer" value="Hazard"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="70">
  <objectgroup draworder="index" id="2">
   <object id="1" x="1" y="0" width="14" height="16">
    <properties>
     <property name="unity:IsTrigger" value="true"/>
     <property name="unity:layer" value="Hazard"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
</tileset>
