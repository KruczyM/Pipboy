const perks = [
    {
        name : 'Armorer',
        rank : [{number : 1, description : 'Gain access to base level and Rank 1 armor mods.'},
        {number : 2, description : 'Gain access to Rank 2 armor mods.'},
        {number : 3, description : 'Gain access to Rank 3 armor mods.'},
        {number : 4, description : 'Gain access to Rank 4 armor mods.'}],
        type : 'Strength',
        perkDescription : 'Protect yourself from the dangers of the wasteland. If you are the sort to tinker at an armor workbench and want to craft some impressively protective gear for yourself or your companions, choose this perk.'
    },
    {
        name : 'Basher',
        rank : [{number : 1, description : 'Gun bashing does 25% more damage.'},
        {number : 2, description : 'Gun bashing does 50% more damage and possibly cripples your opponent.'},
        {number : 3, description : 'Gun bashing does 75% more damage and has an increased chance to cripple your enemy.'},
        {number : 4, description : 'Gun bashing does double damage and has an increased chance to cripple your opponent and inflict a critical hit.'}],
        type : 'Strength',
        perkDescription : 'Get up close and personal! The amount of time you use the butt of your gun to inflict a bloody nose (or worse) at close quarters reflects how important you deem this perk to be. But it does increase the flexibility of more complex combat situations where you may not wish to switch between a favored firearm and a different weapons type.'
    },
    {
        name : 'Big_Leagues',
        rank : [{number : 1, description : 'Does 20% more melee weapon damage.'},
        {number : 2, description : 'Does 40% more melee weapon damage and gains a chance to disarm your opponent.'},
        {number : 3, description : 'Does 60% more melee weapon damage and gains an increased chance to disarm your opponent.'},
        {number : 4, description : 'Does 80% more melee weapon damage and hit all targets in front of you.'},
        {number : 5, description : 'Does double damage with a melee weapon and has a chance to cripple your opponent or grand slam their head clean off.'}],
        type : 'Strength',
        perkDescription : 'Swing for the fences! If you design a bludgeoning or bladed method of bringing an end to your foes, this is the perk to take. Though difficult to battle against multiple enemies in the same space, close combat is much more impressive when your damage is increased.'
    },
    {
        name : 'Blacksmith',
        rank : [{number : 1, description : 'Gain access to base level and Rank 1 melee weapon mods.'},
        {number : 2, description : 'Gain access to Rank 2 melee weapon mods.'},
        {number : 3, description : 'Gain access to Rank 3 melee weapon mods.'}],
        type : 'Strength',
        perkDescription : 'Fire up the forge! If you enjoy swinging a melee weapon into the skulls of your adversaries, it pays to craft modified variants at a weapons workbench.'
    },
    {
        name : 'Heavy_Gunner',
        rank : [{number : 1, description : 'Heavy guns do 20% more damage.'},
        {number : 2, description : 'Heavy guns do 40% more damage and have improved hip-fire accuracy.'},
        {number : 3, description : 'Heavy guns do 60% more damage and hip-fire accuracy is improved even more.'},
        {number : 4, description : 'Heavy guns do 80% more damage and have a chance to stagger your opponent.'},
        {number : 5, description : 'Heavy guns now do double damage.'}],
        type : 'Strength',
        perkDescription : 'Thanks to practice and conditioning, you are able to utilize the weightiest of weapons with an extra degree of precision.'
    },
    {
        name : 'Iron_Fist',
        rank : [{number : 1, description : 'Punching attacks do 20% more damage.'},
                {number : 2, description: 'Punching attacks now do 40% damage and can disarm opponent.'},
                {number : 3, description: 'Punching attacks now do 60% damage. Unarmed power attacks have an increased chance to cripple your enemies limbs.'},
                {number : 4, description: 'Punching attacks now do 80% more damage. Unarmed power attacks have an increased chance to cripple your enemies limbs.'},
                {number : 5, description: 'Punching attacks now do double damage. Criticals in V.A.T.S will paralyze your opponent.'}],
                type : 'Strength',
                perkDescription : "Channel your chi to unleash devastating fury! If you're the pugilistic sort and favor unarmed weaponry to inflict pain and suffering to an ever-more impressive degree, this is the perk for you! Let's not dwell on the slight shortfall of the difficulty in fighting multiple opponents at once; this focuses all of your muscle on one hapless fool."
    },
    {
        name : 'Pain_Train',
        rank : [{number : 1, description : 'While wearing Power Armor, sprinting into enemies hurts and staggers them. (Robots and oversized enemies are immune to the stagger.)'},
        {number : 2, description : 'Sprinting into enemies while wearing Power Armor now causes severe damage and a more powerful stagger. (Robots and oversized enemies are immune to the stagger.)'},
        {number : 3, description : 'Sprinting into enemies while wearing Power Armor now causes massive damage and knocks them down. Impact landing near enemies inflicts even more damage.'}],
        type : 'Strength',
        perkDescription : 'Choo-Choo! All Aboard! Turning Power Armor into an offensive weapon! What an exceptional idea! As long as you have the Action points to complete a sprint before switching to your favorite weapon and you are focusing on Power Armor as a main source of protection, this can prove an excellent deterrent at any time during combat.'
    },
    {
        name : 'Rooted',
        rank : [{number : 1, description : 'While standing still, you gain 25% Damage Resistance and your melee and unarmed attacks deal 25% more damage.'},
        {number : 2, description : 'While standing still, you gain 50% Damage Resistance and your melee and unarmed attacks deal 50% more damage.'},
        {number : 3, description : 'While standing still you may automatically disarm enemies that use melee weapons against you.'}],
        type : 'Strength',
        perkDescription : 'You are part tree! Though ostensibly used when you are standing there trading close quarter blows with a hapless idiot, this can also be used when you are sneaking behind a foe, stopping, and delivering a killing blow.'
    },
    {
        name : 'Steady_Aim',
        rank : [{number : 1, description : 'Hip fire accuracy is improved when firing any gun.'},
        {number : 2, description : 'Hip fire accuracy is improved even more when firing any gun'}],
        type : 'Strength',
        perkDescription : 'Stay on target! If you enjoy the benefits of gun-play without entering V.A.T.S to accomplish your violent goal, then increase the accuracy of any projectile weapon with this perk. This allows you a little more leeway when manually firing at foes, and also without aiming down iron-sights or scopes.'
    },
    {
        name : 'Strong_Back',
        rank : [{number : 1, description : 'Gain +25 to carry weight.'},
        {number : 2, description : 'Gain +50 to carry weight.'},
        {number : 3, description : 'When overburdened you can use action points to run.'},
        {number : 4, description : 'When overburdened you can Fast-Travel.'}],
        type : 'Strength',
        perkDescription : 'What are you? Part pack mule? Though those favouring heavier weapons and armor are likely to take this perk on general principle, it is also hugely beneficial to scavengers; spend more time in the wilderness gathering loot to sell or trade or carry a greater complement of killing equipment.'
    },
    {
        name : '',
        rank : [{number : 1, description : ''},
        {number : 2, description : ''},
        {number : 3, description : ''},
        {number : 4, description : ''},
        {number : 5, description : ''}],
        type : 'Strength'
    },

]


// rank : [{number : 1, description : ''},
// {number : 2, description : ''},
// {number : 3, description : ''},
// {number : 4, description : ''},
// {number : 5, description : ''},]

